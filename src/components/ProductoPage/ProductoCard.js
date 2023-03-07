import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import accounting from 'accounting';
import ItemCount from '../ContadorProductos/BtnContador';
import './checkCardStilo.css';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',

    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));



export default function ProductoIndividual({ pproduct: { id, name, productType, image, price, rating } }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const addProductos = () => {

    }

    return (
        <Card sx={{ maxWidth: 930 }}>
            <div>
                <div className='Carmediapg'>
                    <CardMedia
                        component="img"
                        height="50"
                        image={image}
                    >
                    </CardMedia>
                </div>
            </div>

            <div className='container-nm-precio'>



                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 'auto' }} size="small" aria-label="a dense table">

                        <TableRow >
                            <TableCell align="left" sx={{ background: '#D5DBDB', color: '#002652' }}>&#160;&#160;&#160;Nombre</TableCell>
                            <TableCell align="right" sx={{ background: '#D5DBDB', color: '#002652' }}>&#160;&#160;&#160;&#160;Precio</TableCell>
                            <TableCell align="center" sx={{ background: '#D5DBDB', color: '#002652' }}>&#160;&#160;Cantidad</TableCell>
                            <TableCell align="left" sx={{ background: '#D5DBDB', color: '#002652' }}>Total</TableCell>
                        </TableRow>

                    </Table>
                </TableContainer>


                <CardHeader
                    action={
                        <Typography className='nn' variant='h6'>
                            <div className='nm-producto'>
                                {name}
                            </div>
                            <div className='prc-producto'>
                                {accounting.formatMoney(price, "-$")}
                                <br></br>
                                {accounting.formatMoney(price, "$")}
                            </div>
                            <div className='count-producto'>
                                {1000}
                            </div>
                            <div className='tt-producto'>
                                {accounting.formatMoney(1500000, "$")}
                            </div>
                            <div className='ic-delete'>
                                <DeleteIcon />
                            </div>
                        </Typography>
                    }
                />
            </div>


            {/*className={classes.CardActions} no se puso esto como clase de CardAction*/}
            <CardActions disableSpacing color='#FFF3E0'>
                <div className='darray' >
                    <h4>Rating: </h4> {Array(rating)
                        .fill()
                        .map((_, i) => (<p key={'pg' + i}>&#11088;</p>
                        ))}
                </div>

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            
            <Collapse in={expanded} timeout="auto" unmountOnExit>

                <div className='btn-cnt-prd'>
                    <ItemCount />
                </div>

            </Collapse>
        </Card>
    );
}