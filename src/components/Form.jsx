import {Box, TextField,Button,makeStyles} from '@material-ui/core'


const useStyles = makeStyles ({
    component : {
        padding: 10,
        background: '#445A6F'

    },
    input: {
        color : '#fff',
        marginRight: 15,
    },
    button : {
        width: 150,
        height: 40, 
        background: '#e67e22',
        color: '#fff',
        marginTop:5
    }

})

const Form =  () => {
    const classes = useStyles();
    return (
        <Box className = {classes.component}>
            <TextField 
            inputProps = {{className: classes.input}} 
             className = {classes.input}
            label = "City"
             />
            <TextField  label = "Country"
            inputProps = {{className: classes.input}} 
            className = {classes.input}
            />
            <Button variant = "contained"
            className = {classes.button}
            >Get Weather</Button>

        </Box>
    )
}
export default Form;