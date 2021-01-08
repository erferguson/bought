import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes', price:'$45', image:'https://nb.scene7.com/is/image/NB/mbecnbw3_nb_02_i?$pdpflexf22x$&fmt=webp&wid=944&hei=944' },
    {id: 2, name: 'Shoes', description: 'Walking shoes', price:'$35', image:'https://nb.scene7.com/is/image/NB/mroavtb_nb_02_i?$pdpflexf22x$&fmt=webp&wid=944&hei=944'},
]

const Products = () => {
    return(
       <main>
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid  key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main> 
    )
}

export default Products