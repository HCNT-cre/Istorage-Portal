import React from 'react';
import { Grid, List, ListItem, ListItemText, Checkbox, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setHeaderUnfixed } from 'src/service/actions/headerAction';
import { removeDocFromCart, removeFileFromCart } from 'src/service/actions/cartAction';
import { notifySuccess } from 'src/utils/function';
import EmptyView from 'src/utils/view/emptyView';
const CartPage = () => {
    const dispatch = useDispatch();
    dispatch(setHeaderUnfixed())

    const cart = useSelector((state) => state.cart.cart);

    const handleRemoveFileFromCart = (file) => {
        dispatch(removeFileFromCart(file))
        notifySuccess('Xoá hồ sơ thành công!')

    }

    const handleRemoveDocFromCart = (doc, file) => {
        dispatch(removeDocFromCart(doc, file))
        notifySuccess('Xoá văn bản thành công!')
    }

    return (
        <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center">
            <Grid item sx={{
                width: '80%',
                maxWidth: '800px !important',
                padding: '10px',    
            }}>
                {cart.length === 0 ? <EmptyView /> :
                    <List>
                        {cart.map((cartItem) => (
                            <ListItem sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                backgroundColor: '#ccc',
                                marginTop: '10px',
                                borderRadius: '10px',
                                boxShadow: '0 0 20px #ccc',
                                width: '100%',
                            }}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center'>
                                        <Checkbox />
                                        <ListItemText primary={cartItem.data.title} />
                                    </div>
                                    <div>
                                        <Button
                                            onClick={() => handleRemoveFileFromCart(cartItem.data)}
                                            sx={{
                                                paddingLeft: '10px',
                                            }}>Xoá</Button>
                                    </div>
                                </div>
                                {cartItem.docs.length === 0 ? <p className='ml-[10%] text-[14px]'> Không có văn bản</p> :
                                    <List sx={{
                                        width: '100%',
                                        marginLeft: '10px',
                                    }}>
                                        {cartItem.docs.map((doc) => (
                                            <div className='flex items-center justify-between w-full'>
                                                <div className='flex items-center'>
                                                    <Checkbox />
                                                    <ListItem key={doc.doc_name}>
                                                        <ListItemText primary={doc.doc_name} />
                                                    </ListItem>
                                                </div>
                                                <div>
                                                    <Button
                                                        onClick={() => handleRemoveDocFromCart(doc, cartItem.data)}
                                                        sx={{
                                                            fontSize: '12px',
                                                        }}>xoá</Button>
                                                </div>
                                            </div>
                                        ))}
                                    </List>
                                }
                            </ListItem>
                        ))}
                    </List>
                }
            </Grid>
        </Grid>
    );
};

export default CartPage;
