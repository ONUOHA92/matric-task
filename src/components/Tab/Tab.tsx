import React from 'react';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Stack, Card, Grid, Container } from '@mui/material';
import './table.scss'
import Box from '@mui/material/Box';
import fliter from '../../assets/images/filter.png'
import combine from '../../assets/images/combine.png'
import { data } from '../../data/data';


interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;

}



function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


function TabComponent() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };




    return (
        <Container>
            <Box sx={{ width: '100%' }} className="TabComponent">
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Box sx={{ border: 1, width: '470px', marginLeft: 2, borderRadius: 2 }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Last hour" {...a11yProps(0)} />
                                <Tab label="Today" {...a11yProps(1)} />
                                <Tab label="Yesterday" {...a11yProps(2)} />
                                <Tab label="Last 3 days" {...a11yProps(3)} />
                            </Tabs>
                        </Box>
                    </Grid>
                </Grid>

                <TabPanel value={value} index={0}>
                    <Stack spacing={2}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Grid container>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <div className='chartStyle'>
                                            <h3>Errors: 0,12%</h3>
                                            <p>Average: 0,11%</p>
                                        </div>

                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <div className='chartStyle'>
                                            <h3>Zeroes: 5,12% </h3>
                                            <p>Average: 0,11%</p>
                                        </div>

                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <div className='chartStyle'>
                                            <h3>Timeouts: 0,12% </h3>
                                            <p>Average: 0,11%</p>
                                        </div>

                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} sm={4} md={4} lg={4}>
                                <div className='container-one'>

                                </div>
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <div className='container-two'>

                                </div>
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <div className='container-three'>

                                </div>
                            </Grid>
                            <Grid item xs={1} sm={1} md={1} lg={1}>
                                <div className='container-four'>

                                </div>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            {data.errors_last_3days.map((info, index) => (
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <div key={index}>
                                        {info.count} {""} {info.code}
                                    </div>
                                </Grid>

                            ))}
                        </Grid>
                        <div className='container-info-line'>
                            <Grid container spacing={2}>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '160px' }}>
                                        <div className='search-container'>
                                            Searches
                                        </div>

                                        <div style={{ background: '#8BC34A', color: '#FFFFFF', height: 18, marginTop: 2, padding: 2, borderRadius: 4 }}>
                                            +5%
                                        </div>

                                    </div>


                                    <div className='search-first-container'>
                                        <div className='searches_previous'>
                                            {data.data.searches_previous_yesterday}
                                        </div>
                                        <div className='search_yesterday'>
                                            Yesterday
                                        </div>
                                    </div>

                                    <div className='search-first-container'>
                                        <div className='searches_previous'>
                                            {data.data.searches_current_last_3days}
                                        </div>
                                        <div className='search_yesterday'>
                                            Last friday
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <div className='traffic'>
                                        Mobile traffic: 100%
                                        Web traffic: 100%
                                    </div>

                                    <div className='trafic-mobile'>
                                        You get 100% traffic on mobile and desktop devices.
                                    </div>

                                    <div>
                                        Help: <span className='search-span'>Searches, Pessimisation</span>
                                    </div>


                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4}>

                                </Grid>

                            </Grid>

                            <div style={{ borderBottom: '1px solid gray', width: '80%' }}>

                            </div>

                        </div>

                        <div className='container-info-click'>
                            <Grid container spacing={2}>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>

                                    <div style={{ display: 'flex' }}>

                                        <div className='click_container'>
                                            Clicks
                                        </div>
                                    </div>

                                    <div>

                                        <div className="click_flex_container">
                                            <div className='click_data_container'>
                                                {data.data.clicks_current_last_hour}
                                            </div>
                                            <div className='click_data_date'>
                                                Yesterday
                                            </div>
                                        </div>

                                        <div className='click_previous_hour'>
                                            <div>
                                                {data.data.clicks_previous_last_hour}
                                            </div>


                                            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                                                <div>
                                                    {data.data.clicks_current_last_hour}
                                                </div>
                                                <div>
                                                    Last friday
                                                </div>
                                            </div>



                                        </div>
                                    </div>

                                </Grid>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>
                                    <div style={{ color: '#FF6A67' }}>
                                        CTR: 0,04%
                                    </div>
                                    <div style={{
                                        color: '#A0B0B9', width: '316px',
                                        height: '17px', fontSize: '12px'
                                    }}>
                                        Conversion from searches  to clicks on all devices.
                                    </div>
                                    <div style={{ color: '#4A4A4A', fontSize: '12px' }}>
                                        Help: <span style={{ color: '#2196F3' }}>CTR, Cliks</span>
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>

                                </Grid>
                            </Grid>
                            <div style={{ borderBottom: '1px solid gray', width: '80%' }}>

                            </div>
                        </div>

                        <div className='container-info-click'>
                            <Grid container spacing={2}>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>
                                    <div style={{ width: '40px', color: '#4A4A4A' }}>
                                        Sales
                                    </div>
                                    <div style={{ display: 'flex', width: 80, justifyContent: 'space-between' }}>
                                        <div style={{ color: '#4A4A4A' }}>
                                            {data.data.bookings_current_last_hour}
                                        </div>
                                        <div style={{ color: '#4A4A4A', fontSize: '12px', marginTop: 2 }}>
                                            Yesterday
                                        </div>
                                    </div>


                                    <div style={{ display: 'flex', width: 100, justifyContent: 'space-between' }}>
                                        <div>
                                            {data.data.bookings_previous_last_hour}
                                        </div>
                                        <div style={{ color: '#4A4A4A', fontSize: '12px', width: '170px' }}>
                                            Last friday
                                        </div>
                                    </div>


                                </Grid>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>
                                    <div style={{ color: '#4A4A4A' }}>
                                        STR: 6.2%
                                        Avg. Check: 8 903₽
                                    </div>
                                    <div style={{ color: '#A0B0B9', fontSize: '12px', }}>
                                        Conversion from cliks  to bookings on all devices.
                                    </div>

                                    <div style={{ color: '#4A4A4A' }}>
                                        Help: <span style={{ color: '#2196F3', fontSize: '12px' }}>STR, Bookings, Avg. Check</span>
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>

                                </Grid>
                            </Grid>
                            <div style={{ borderBottom: '1px solid gray', width: '80%' }}>

                            </div>
                        </div>

                    </Stack>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Stack spacing={2}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Grid container>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <div className='chartStyle'>
                                            <h3>Errors: 0,12%</h3>
                                            <p>Average: 0,11%</p>
                                        </div>

                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <div className='chartStyle'>
                                            <h3>Zeroes: 5,12% </h3>
                                            <p>Average: 0,11%</p>
                                        </div>

                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <div className='chartStyle'>
                                            <h3>Timeouts: 0,12% </h3>
                                            <p>Average: 0,11%</p>
                                        </div>

                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} sm={4} md={4} lg={4}>
                                <div className='container-one'>

                                </div>
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <div className='container-two'>

                                </div>
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <div className='container-three'>

                                </div>
                            </Grid>
                            <Grid item xs={1} sm={1} md={1} lg={1}>
                                <div className='container-four'>

                                </div>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            {data.errors_yesterday.map((info, index) => (
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <div key={index}>
                                        {info.count} {""} {info.code}
                                    </div>
                                </Grid>

                            ))}
                        </Grid>
                        <div className='container-info-line'>
                            <Grid container spacing={2}>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '160px' }}>
                                        <div className='search-container'>
                                            Searches
                                        </div>

                                        <div style={{ background: '#8BC34A', color: '#FFFFFF', height: 18, marginTop: 2, padding: 2, borderRadius: 4 }}>
                                            +5%
                                        </div>

                                    </div>


                                    <div className='search-first-container'>
                                        <div className='searches_previous'>
                                            {data.data.searches_previous_last_hour}
                                        </div>
                                        <div className='search_yesterday'>
                                            Yesterday
                                        </div>
                                    </div>

                                    <div className='search-first-container'>
                                        <div className='searches_previous'>
                                            {data.data.searches_current_last_3days}
                                        </div>
                                        <div className='search_yesterday'>
                                            Last friday
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <div className='traffic'>
                                        Mobile traffic: 100%
                                        Web traffic: 100%
                                    </div>

                                    <div className='trafic-mobile'>
                                        You get 100% traffic on mobile and desktop devices.
                                    </div>

                                    <div>
                                        Help: <span className='search-span'>Searches, Pessimisation</span>
                                    </div>


                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4}>

                                </Grid>

                            </Grid>

                            <div style={{ borderBottom: '1px solid gray', width: '80%' }}>

                            </div>

                        </div>

                        <div className='container-info-click'>
                            <Grid container spacing={2}>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>

                                    <div style={{ display: 'flex' }}>

                                        <div className='click_container'>
                                            Clicks
                                        </div>
                                    </div>

                                    <div>

                                        <div className="click_flex_container">
                                            <div className='click_data_container'>
                                                {data.data.clicks_current_last_hour}
                                            </div>
                                            <div className='click_data_date'>
                                                Yesterday
                                            </div>
                                        </div>

                                        <div className='click_previous_hour'>
                                            <div>
                                                {data.data.clicks_previous_last_hour}
                                            </div>

                                            <div>
                                                Last friday
                                            </div>

                                        </div>
                                    </div>

                                </Grid>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>
                                    <div style={{ color: '#FF6A67' }}>
                                        CTR: 0,04%
                                    </div>
                                    <div style={{
                                        color: '#A0B0B9', width: '316px',
                                        height: '17px', fontSize: '12px'
                                    }}>
                                        Conversion from searches  to clicks on all devices.
                                    </div>
                                    <div style={{ color: '#4A4A4A', fontSize: '12px' }}>
                                        Help: <span style={{ color: '#2196F3' }}>CTR, Cliks</span>
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>

                                </Grid>
                            </Grid>
                            <div style={{ borderBottom: '1px solid gray', width: '80%' }}>

                            </div>
                        </div>

                        <div className='container-info-click'>
                            <Grid container spacing={2}>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>
                                    <div style={{ width: '40px', color: '#4A4A4A' }}>
                                        Sales
                                    </div>
                                    <div style={{ display: 'flex', width: 80, justifyContent: 'space-between' }}>
                                        <div style={{ color: '#4A4A4A' }}>
                                            {data.data.bookings_current_last_hour}
                                        </div>
                                        <div style={{ color: '#4A4A4A', fontSize: '12px', marginTop: 2 }}>
                                            Yesterday
                                        </div>
                                    </div>


                                    <div style={{ display: 'flex', width: 100, justifyContent: 'space-between' }}>
                                        <div>
                                            {data.data.bookings_previous_last_hour}
                                        </div>
                                        <div style={{ color: '#4A4A4A', fontSize: '12px', width: '170px' }}>
                                            Last friday
                                        </div>
                                    </div>


                                </Grid>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>
                                    <div style={{ color: '#4A4A4A' }}>
                                        STR: 6.2%
                                        Avg. Check: 8 903₽
                                    </div>
                                    <div style={{ color: '#A0B0B9', fontSize: '12px', }}>
                                        Conversion from cliks  to bookings on all devices.
                                    </div>

                                    <div style={{ color: '#4A4A4A' }}>
                                        Help: <span style={{ color: '#2196F3', fontSize: '12px' }}>STR, Bookings, Avg. Check</span>
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>

                                </Grid>
                            </Grid>
                            <div style={{ borderBottom: '1px solid gray', width: '80%' }}>

                            </div>
                        </div>

                    </Stack>

                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Stack spacing={2}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Grid container>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <div className='chartStyle'>
                                            <h3>Errors: 0,12%</h3>
                                            <p>Average: 0,11%</p>
                                        </div>

                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <div className='chartStyle'>
                                            <h3>Zeroes: 5,12% </h3>
                                            <p>Average: 0,11%</p>
                                        </div>

                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <div className='chartStyle'>
                                            <h3>Timeouts: 0,12% </h3>
                                            <p>Average: 0,11%</p>
                                        </div>

                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} sm={4} md={4} lg={4}>
                                <div className='container-one'>

                                </div>
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <div className='container-two'>

                                </div>
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <div className='container-three'>

                                </div>
                            </Grid>
                            <Grid item xs={1} sm={1} md={1} lg={1}>
                                <div className='container-four'>

                                </div>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            {data.errors_last_3days.map((info, index) => (
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <div key={index}>
                                        {info.count} {""} {info.code}
                                    </div>
                                </Grid>

                            ))}
                        </Grid>
                        <div className='container-info-line'>
                            <Grid container spacing={2}>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '160px' }}>
                                        <div className='search-container'>
                                            Searches
                                        </div>

                                        <div style={{ background: '#8BC34A', color: '#FFFFFF', height: 18, marginTop: 2, padding: 2, borderRadius: 4 }}>
                                            +5%
                                        </div>

                                    </div>


                                    <div className='search-first-container'>
                                        <div className='searches_previous'>
                                            {data.data.searches_previous_yesterday}
                                        </div>
                                        <div className='search_yesterday'>
                                            Yesterday
                                        </div>
                                    </div>

                                    <div className='search-first-container'>
                                        <div className='searches_previous'>
                                            {data.data.searches_current_yesterday}
                                        </div>
                                        <div className='search_yesterday'>
                                            Last friday
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <div className='traffic'>
                                        Mobile traffic: 100%
                                        Web traffic: 100%
                                    </div>

                                    <div className='trafic-mobile'>
                                        You get 100% traffic on mobile and desktop devices.
                                    </div>

                                    <div>
                                        Help: <span className='search-span'>Searches, Pessimisation</span>
                                    </div>


                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4}>

                                </Grid>

                            </Grid>

                            <div style={{ borderBottom: '1px solid gray', width: '80%' }}>

                            </div>

                        </div>

                        <div className='container-info-click'>
                            <Grid container spacing={2}>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>

                                    <div style={{ display: 'flex' }}>

                                        <div className='click_container'>
                                            Clicks
                                        </div>
                                    </div>

                                    <div>

                                        <div className="click_flex_container">
                                            <div className='click_data_container'>
                                                {data.data.clicks_current_last_hour}
                                            </div>
                                            <div className='click_data_date'>
                                                Yesterday
                                            </div>
                                        </div>

                                        <div className='click_previous_hour'>
                                            <div>
                                                {data.data.clicks_previous_last_hour}
                                            </div>

                                            <div style={{}}>
                                                Last friday
                                            </div>

                                        </div>
                                    </div>

                                </Grid>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>
                                    <div style={{ color: '#FF6A67' }}>
                                        CTR: 0,04%
                                    </div>
                                    <div style={{
                                        color: '#A0B0B9', width: '316px',
                                        height: '17px', fontSize: '12px'
                                    }}>
                                        Conversion from searches  to clicks on all devices.
                                    </div>
                                    <div style={{ color: '#4A4A4A', fontSize: '12px' }}>
                                        Help: <span style={{ color: '#2196F3' }}>CTR, Cliks</span>
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>

                                </Grid>
                            </Grid>
                            <div style={{ borderBottom: '1px solid gray', width: '80%' }}>

                            </div>
                        </div>

                        <div className='container-info-click'>
                            <Grid container spacing={2}>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>
                                    <div style={{ width: '40px', color: '#4A4A4A' }}>
                                        Sales
                                    </div>
                                    <div style={{ display: 'flex', width: 80, justifyContent: 'space-between' }}>
                                        <div style={{ color: '#4A4A4A' }}>
                                            {data.data.bookings_current_last_hour}
                                        </div>
                                        <div style={{ color: '#4A4A4A', fontSize: '12px', marginTop: 2 }}>
                                            Yesterday
                                        </div>
                                    </div>


                                    <div style={{ display: 'flex', width: 100, justifyContent: 'space-between' }}>
                                        <div>
                                            {data.data.bookings_previous_last_hour}
                                        </div>
                                        <div style={{ color: '#4A4A4A', fontSize: '12px', width: '170px' }}>
                                            Last friday
                                        </div>
                                    </div>


                                </Grid>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>
                                    <div style={{ color: '#4A4A4A' }}>
                                        STR: 6.2%
                                        Avg. Check: 8 903₽
                                    </div>
                                    <div style={{ color: '#A0B0B9', fontSize: '12px', }}>
                                        Conversion from cliks  to bookings on all devices.
                                    </div>

                                    <div style={{ color: '#4A4A4A' }}>
                                        Help: <span style={{ color: '#2196F3', fontSize: '12px' }}>STR, Bookings, Avg. Check</span>
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>

                                </Grid>
                            </Grid>
                            <div style={{ borderBottom: '1px solid gray', width: '80%' }}>

                            </div>
                        </div>

                    </Stack>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Stack spacing={2}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Grid container>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <div className='chartStyle'>
                                            <h3>Errors: 0,12%</h3>
                                            <p>Average: 0,11%</p>
                                        </div>

                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <div className='chartStyle'>
                                            <h3>Zeroes: 5,12% </h3>
                                            <p>Average: 0,11%</p>
                                        </div>

                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <div className='chartStyle'>
                                            <h3>Timeouts: 0,12% </h3>
                                            <p>Average: 0,11%</p>
                                        </div>

                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} sm={4} md={4} lg={4}>
                                <div className='container-one'>

                                </div>
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <div className='container-two'>

                                </div>
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <div className='container-three'>

                                </div>
                            </Grid>
                            <Grid item xs={1} sm={1} md={1} lg={1}>
                                <div className='container-four'>

                                </div>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            {data.errors_yesterday.map((info, index) => (
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <div key={index}>
                                        {info.count} {""} {info.code}
                                    </div>
                                </Grid>

                            ))}
                        </Grid>
                        <div className='container-info-line'>
                            <Grid container spacing={2}>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '160px' }}>
                                        <div className='search-container'>
                                            Searches
                                        </div>

                                        <div style={{ background: '#8BC34A', color: '#FFFFFF', height: 18, marginTop: 2, padding: 2, borderRadius: 4 }}>
                                            +5%
                                        </div>

                                    </div>


                                    <div className='search-first-container'>
                                        <div className='searches_previous'>
                                            {data.data.searches_previous_yesterday}
                                        </div>
                                        <div className='search_yesterday'>
                                            Yesterday
                                        </div>
                                    </div>

                                    <div className='search-first-container'>
                                        <div className='searches_previous'>
                                            {data.data.searches_current_last_3days}
                                        </div>
                                        <div className='search_yesterday'>
                                            Last friday
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <div className='traffic'>
                                        Mobile traffic: 100%
                                        Web traffic: 100%
                                    </div>

                                    <div className='trafic-mobile'>
                                        You get 100% traffic on mobile and desktop devices.
                                    </div>

                                    <div>
                                        Help: <span className='search-span'>Searches, Pessimisation</span>
                                    </div>


                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4}>

                                </Grid>

                            </Grid>

                            <div style={{ borderBottom: '1px solid gray', width: '80%' }}>

                            </div>

                        </div>

                        <div className='container-info-click'>
                            <Grid container spacing={2}>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>

                                    <div style={{ display: 'flex' }}>

                                        <div className='click_container'>
                                            Clicks
                                        </div>
                                    </div>

                                    <div>

                                        <div className="click_flex_container">
                                            <div className='click_data_container'>
                                                {data.data.clicks_current_last_hour}
                                            </div>
                                            <div className='click_data_date'>
                                                Yesterday
                                            </div>
                                        </div>

                                        <div className='click_previous_hour'>
                                            <div>
                                                {data.data.clicks_previous_last_hour}
                                            </div>

                                            <div>
                                                Last friday
                                            </div>

                                        </div>
                                    </div>

                                </Grid>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>
                                    <div style={{ color: '#FF6A67' }}>
                                        CTR: 0,04%
                                    </div>
                                    <div style={{
                                        color: '#A0B0B9', width: '316px',
                                        height: '17px', fontSize: '12px'
                                    }}>
                                        Conversion from searches  to clicks on all devices.
                                    </div>
                                    <div style={{ color: '#4A4A4A', fontSize: '12px' }}>
                                        Help: <span style={{ color: '#2196F3' }}>CTR, Cliks</span>
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>

                                </Grid>
                            </Grid>
                            <div style={{ borderBottom: '1px solid gray', width: '80%' }}>

                            </div>
                        </div>

                        <div className='container-info-click'>
                            <Grid container spacing={2}>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>
                                    <div style={{ width: '40px', color: '#4A4A4A' }}>
                                        Sales
                                    </div>
                                    <div style={{ display: 'flex', width: 80, justifyContent: 'space-between' }}>
                                        <div style={{ color: '#4A4A4A' }}>
                                            {data.data.bookings_current_last_hour}
                                        </div>
                                        <div style={{ color: '#4A4A4A', fontSize: '12px', marginTop: 2 }}>
                                            Yesterday
                                        </div>
                                    </div>


                                    <div style={{ display: 'flex', width: 100, justifyContent: 'space-between' }}>
                                        <div>
                                            {data.data.bookings_previous_last_hour}
                                        </div>
                                        <div style={{ color: '#4A4A4A', fontSize: '12px', width: '170px' }}>
                                            Last friday
                                        </div>
                                    </div>


                                </Grid>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>
                                    <div style={{ color: '#4A4A4A' }}>
                                        STR: 6.2%
                                        Avg. Check: 8 903₽
                                    </div>
                                    <div style={{ color: '#A0B0B9', fontSize: '12px', }}>
                                        Conversion from cliks  to bookings on all devices.
                                    </div>

                                    <div style={{ color: '#4A4A4A' }}>
                                        Help: <span style={{ color: '#2196F3', fontSize: '12px' }}>STR, Bookings, Avg. Check</span>
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} lg={4} xl={4}>

                                </Grid>
                            </Grid>
                            <div style={{ borderBottom: '1px solid gray', width: '80%' }}>

                            </div>
                        </div>

                    </Stack>
                </TabPanel>
            </Box>

        </Container>

    );
}

export default TabComponent;