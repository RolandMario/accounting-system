import React from 'react'
import { Button, TextField, 
    Typography, Grid,  Avatar} from '@material-ui/core' ;
import { Checkbox, FormControlLabel} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import svg from '../assets/signup.svg'
import Box from '@mui/material/Box'
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <Grid container style={{justifyContent:'center', align:'center'}}>
              
        <Grid item xs={12} md={0} lg={3}/> 
        
        <Grid item container xs={12} md={6} lg={3} direction='column' align='center'style={{padding:15}}>
            <Typography><Avatar><AnalyticsIcon color='primary'sx={{fontSize:55}} /></Avatar><span>Track Money</span></Typography>
            <Typography variant='h4'>Create a New Account</Typography>
            
            <TextField label='Email' variant='outlined' size='small' style={{marginTop:15}}/>
            <TextField label='Phone Number' variant='outlined' size='small' style={{marginTop:15}}/>
            <TextField label='password' variant='outlined' size='small' style={{marginTop:15}}/>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Agree to Terms of services" style={{marginTop:15}}/>
            <Button variant='contained'style={{marginTop:10}}>Create Account</Button>
            <Typography style={{marginTop:15}}>Already have account?<Link to='/'> Login</Link></Typography>
            
        </Grid> 
        
        <Grid item container xs={12} md={6} lg={3} sx={{ backgroundColor: '#e9e9ee' }} >
            <Grid item xs={12} textAlign='right'sx={{paddingRight: 5}}>
                <Typography style={{marginTop:15}}><ArticleIcon color='primary'/><span>Track Money</span></Typography>
                <Typography style={{marginTop:15}}>You can track your expenses,<br/>
                Create invoices, etc
                </Typography>
                <Button variant='contained' style={{marginTop:15}}>Learn More</Button>
            </Grid>
            <Grid item xs={12} textAlign='left'>
                
            <Box
                component="img"
                sx={{
                height: 233,
                width: 350,
                }}
                alt="The house from the offer."
                src={svg}
            />            
            </Grid>
           
        </Grid> 
        
        <Grid item xs={12} md={0}lg={3} />

     </Grid>
    )
}

export default SignUp
