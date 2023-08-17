import React,  { useState, useEffect } from 'react'
import { Title, Text, TabList, Tab, TabGroup, TabPanel, TabPanels, Flex, DonutChart, Card, Grid, Col, Metric} from '@tremor/react'
import { UserGroupIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import { ApiGetUsers } from '../api/ApiGetUsers';
import { ApiGetpostulaciones } from '../api/ApiGetPostulaciones';
import useAuth from '../hooks/useAuth';
import { Publicaciones } from '../screens/Publicaciones';
import { GetPublicaciones } from '../api/ApiPublicaciones';

const DashboardBase = (props) => {
    const [limpiadores, setLimpiadores] = useState([]);
    const [solicitantes, setSolicitantes] = useState([]);
    const [postulaciones, setPostulaciones] = useState([]);
    const [estatusPost, setStatusPost] = useState([]);
    const [dataVuales, setGetPublicaciones] = useState([])

    const config = {
        headers: { Authorization: `Bearer ${props.token}` }
    };

    const getUsersData = async () => {
        await ApiGetUsers(config).then((res) => {
            let limpiadoresFilterer = [];
            let solicitantesFilterer = [];
            res.data.map((item) => {
                if(item.role.authority == "ROLE_LIMPIADOR"){
                    limpiadoresFilterer.push(item)
                } else if(item.role.authority == "ROLE_SOLICITANTE") {
                    solicitantesFilterer.push(item)
                }
            })
            setLimpiadores(limpiadoresFilterer)
            setSolicitantes(solicitantesFilterer)
        })
    }

    const getPostulacionesData = async () => {
        await ApiGetpostulaciones(config).then((res) => {
            setPostulaciones(res.data)
            
            let eliminadas = res.data.filter((item) => item.status == 0).length;
            let espera = res.data.filter((item) => item.status == 1).length;
            let aceptadas = res.data.filter((item) => item.status == 2).length;
            let rechazadas = res.data.filter((item) => item.status == 3).length;
            let calificadas = res.data.filter((item) => item.status == 4).length;
            let finalizadas = res.data.filter((item) => item.status == 5).length;

            let postulacionesData = [
                {
                    status: "Eliminadas",
                    total: eliminadas,
                },
                {
                    status: "En espera",
                    total: espera,
                },
                {
                    status: "Aceptadas",
                    total: aceptadas,
                },
                {
                    status: "Rechazadas",
                    total: rechazadas,
                },
                {
                    status: "Por calificar",
                    total: calificadas,
                },
                {
                    status: "Finalizadas",
                    total: finalizadas,
                },
            ]

            setStatusPost(postulacionesData)
        })
    }

    const getPublicacionesData = async () => {
        await GetPublicaciones(config).then((res) => {
            setGetPublicaciones(res.data)
        })
        console.log(response.data)
        setGetPublicaciones(response.data)
    }

    useEffect(() => {
        getUsersData()
    }, [])

    useEffect(() => {
        getPostulacionesData()
    }, [])

    //const valueFormatter = (number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;

    return (
        <main className=' p-6 sm:p-10'>
            <TabGroup>
                <TabList>
                    <Tab icon={UserGroupIcon} >Users</Tab>
                    <Tab icon={ClipboardDocumentListIcon} onClick={()=>getPublicacionesData()}>Publicaciones</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>  
                        <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
                            <Card decoration="top" decorationColor="green">
                                <Text>Número de usuarios de tipo</Text>
                                <Metric>Limpiadores: {limpiadores.length}</Metric>
                            </Card>
                            <Card decoration="top" decorationColor="indigo">
                                <Text>Número de usuarios de tipo</Text>
                                <Metric>Solicitantes: {solicitantes.length}</Metric>
                            </Card>
                            <Card decoration="top" decorationColor="rose">
                                <Text>Número de</Text>
                                <Metric>Postulaciones: {postulaciones.length}</Metric>
                            </Card>
                            <Col numColSpan={1} numColSpanLg={3}>
                                <Card>
                                    <Metric>Estados de las postulaciones</Metric>
                                    <DonutChart
                                        className="mt-6"
                                        data={estatusPost}
                                        category="total"
                                        index="status"
                                        colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
                                    />
                                </Card>
                            </Col>
                        </Grid>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-10">
                            <Publicaciones dataVuales={dataVuales}/>
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </main>
    )
}

export default DashboardBase