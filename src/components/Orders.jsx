import {
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Box,
  Button,
  Card,
  Image,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import doordash from "../assetts/doordash.png";
import uberEats from "../assetts/ubereats.png";
import grubhub from "../assetts/grubhub.png";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [deliveryDetails, setDeliveryDetails] = useState(null);

  useEffect(() => {
    const fetchDeliveryDetails = async () => {
      try {
        const response = await fetch(
          "https://openapi.doordash.com/drive/v2/deliveries/D-78945",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImRkLXZlciI6IkRELUpXVC1WMSJ9.eyJhdWQiOiJkb29yZGFzaCIsImlzcyI6ImZmMmUzYjYyLTFkMjQtNDRhYy1iZTc3LTAxYjgzY2QxYTU5ZSIsImtpZCI6IjQyNWQxYjNiLThkODUtNGI1Ni04NDBjLWJiNmI5MDZkYzRiOCIsImV4cCI6MTcwMzE1NjEyNSwiaWF0IjoxNzAzMTU1ODI1fQ.Kp5lxoSarDel_hT1MoxN7lvn_ff-fthxAJX2Drr48Og",
              "developer_id": "971b1e0e-f97c-4125-ac52-546890894bdc",
              "signing_secret": "-h_JvyA1F-chCu2YeGQ40To6jsgL_Rkp1K5AWGeJ9DU",
              "key_id": "31934ba5-fa06-4934-b6e1-643f45d93c79",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch delivery details");
        }

        const data = await response.json();
        // setDeliveryDetails(data);
        console.log("Data",data)
      } catch (error) {
        console.error("Error fetching delivery details:", error);
      }
    };

    fetchDeliveryDetails();
  }, []);

  return (
    <div className="h-screen w-full font-Lato my-2 ml-2">
      <div>
        <Breadcrumb marginLeft={4}>
          <BreadcrumbItem fontSize={10}>
            <Link to="/">
              <BreadcrumbLink fontSize={10}>Home</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="#0090FF" href="#" fontSize={10}>
              Orders
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Heading size="md" className="font-Lato my-2 ml-4">
        Orders
      </Heading>
      <Tabs defaultIndex={0} marginLeft={2}>
        <TabList color="#7B7B7B">
          <Tab fontSize={12}>PREVIOUS ORDERS</Tab>
          <Tab fontSize={12}>LIVE ORDERS</Tab>
        </TabList>
        <TabIndicator height="1px" bg="#0090FF" borderRadius="1px" />
        <TabPanels>
          <TabPanel>
            <Box
              boxShadow="xl"
              borderRadius="md"
              bg="white"
              w="100%"
              padding={2}
              color="white"
            >
              <Stack spacing="15px" margin={5}>
                <Card
                  direction={{ base: "column", xs: "row" }}
                  boxShadow="xl"
                  maxW={{ base: "100%", sm: "500px" }}
                  maxH={{ base: "100%", sm: "150px" }}
                  overflow="hidden"
                  variant="outline"
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "50%", sm: "70px" }}
                    maxH={{ base: "50%", sm: "70px" }}
                    src={doordash}
                    alt="door dash"
                  />

                  <HStack spacing="100px" paddingX="25px">
                    <div>
                      <p className="font-bold" size="xs">
                        Delivery Id. DD2568
                      </p>

                      <Text>KFC</Text>
                    </div>
                    <Button variant="solid" marginLeft={5} colorScheme="green">
                      Delivered
                    </Button>
                  </HStack>
                </Card>
                <Card
                  direction={{ base: "column", xs: "row" }}
                  boxShadow="xl"
                  maxW={{ base: "100%", sm: "500px" }}
                  maxH={{ base: "100%", sm: "150px" }}
                  overflow="hidden"
                  variant="outline"
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "50%", sm: "70px" }}
                    maxH={{ base: "50%", sm: "70px" }}
                    src={uberEats}
                    alt="door dash"
                  />

                  <HStack spacing="100px" paddingX="25px">
                    <div>
                      <p className="font-bold" size="xs">
                        Delivery Id. UE8796
                      </p>

                      <Text>Subway</Text>
                    </div>
                    <Button variant="solid" marginLeft={5} colorScheme="red">
                      Cancelled
                    </Button>
                  </HStack>
                </Card>
                <Card
                  direction={{ base: "column", xs: "row" }}
                  boxShadow="xl"
                  maxW={{ base: "100%", sm: "500px" }}
                  maxH={{ base: "100%", sm: "150px" }}
                  overflow="hidden"
                  variant="outline"
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "50%", sm: "70px" }}
                    maxH={{ base: "50%", sm: "70px" }}
                    src={grubhub}
                    alt="door dash"
                  />

                  <HStack spacing="100px" paddingX="25px">
                    <div>
                      <p className="font-bold" size="xs">
                        Delivery Id. GH7521
                      </p>

                      <Text>Dominos</Text>
                    </div>
                    <Button variant="solid" marginLeft={5} colorScheme="green">
                      Delivered
                    </Button>
                  </HStack>
                </Card>
              </Stack>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box
              boxShadow="xl"
              borderRadius="md"
              bg="white"
              w="100%"
              padding={2}
              color="white"
            >
              <Stack spacing="15px" margin={5}>
                <Card
                  direction={{ base: "column", xs: "row" }}
                  boxShadow="xl"
                  maxW={{ base: "100%", sm: "500px" }}
                  maxH={{ base: "100%", sm: "150px" }}
                  overflow="hidden"
                  variant="outline"
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "50%", sm: "70px" }}
                    maxH={{ base: "50%", sm: "70px" }}
                    src={doordash}
                    alt="door dash"
                  />
                  {deliveryDetails && (
                    <HStack spacing="100px" paddingX="25px">
                      <div>
                        <p className="font-bold" size="xs">
                          Delivery Id. {deliveryDetails.external_delivery_id}
                        </p>

                        <Text> {deliveryDetails.dropoff_address}</Text>
                      </div>
                      <Button
                        variant="solid"
                        marginLeft={5}
                        colorScheme="orange"
                      >
                        {deliveryDetails.delivery_status}
                      </Button>
                    </HStack>
                  )}
                </Card>
              </Stack>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Orders;
