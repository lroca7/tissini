/* eslint-disable no-debugger */
<template>
    <v-col cols="12">
        <v-card
            color="#385F73"
            class="category-section cards-category card-entrega-inmediata"
          >
          
           <v-card-actions>
            <v-list-item class="grow">
                <v-row
                    align="center"
                    justify="end"
                    >
                    <v-btn class="button-category" rounded >VER MÁS</v-btn>
                </v-row>
            </v-list-item>
            </v-card-actions>
        </v-card>

        <Carousel class="mt-2"/>

        <v-card
            color="#385F73"
            class="cards-category mt-2 card-new-arrive"
          >
        </v-card>

        <div class="products mt-2" v-if="newArraivals.length > 0">
            
            <v-card  v-for="(item,i) in newArraivals"
                :key="i"
                :src="item"
                max-width="344"
                class="box-product"
            >
                <v-img
                :src="item.image.url"
                height="194"
                ></v-img>

                <v-card-title class="product-titles">
                     {{item.name }}
                </v-card-title>

                <v-card-text class="category-text d-flex">
                    Textiles
                </v-card-text>

                <v-card-text class="price-text d-flex">
                     {{item.price }}
                </v-card-text>
            </v-card>
        </div>

        <v-card
            color="#385F73"
            class="cards-category mt-1 card-best-seller"
          >
        </v-card>

         <div class="products mt-2" v-if="bestsellers.length > 0">
            
            <v-card  v-for="(item,i) in bestsellers"
                :key="i"
                :src="item"
                max-width="344"
                class="box-product"
            >
                <v-img
                :src="item.image.url"
                height="194"
                ></v-img>

                <v-card-title class="product-titles">
                     {{item.name }}
                </v-card-title>

                <v-card-text class="category-text d-flex">
                    Textiles
                </v-card-text>

                <v-card-text class="price-text d-flex">
                     {{item.price }}
                </v-card-text>
            </v-card>
        </div>

    </v-col>
</template>

<script>
import Carousel from '@/views/Carousel'
// import TsHeader from './components/TsHeader'
// import TsHeader from './components/TsHeader'
export default {
    name: 'Category',
    components: {Carousel},
    data () {
        return {
            categories: [],
            sections: [{
                products: []
            }],
            newArraivals: {products: [ ]},
            bestsellers: {products: [ ]},
            sliders: [],
        }
    },

    created() {
        this.getCategories()
        this.getSections()
    },

    methods: {
        getCategories() {
            let me = this
           

            fetch(`${this.$apiUrlV2}categories`)
                .then(res => res.json())
                .then(dataItems => {
                    me.categories = dataItems
                    console.log('categorias', me.categories)

                    for (let i = 0; i < 3; i++) {
                        
                        const img = me.categories[i].image;
                        me.sliders.push(`${me.$apiUrlBase + img}`)
                        
                    }

                    console.log('sliders', me.sliders)
                })
                .catch(error => {
                    console.error('Error:', error)
                })
        },

        getSections(){
            let me = this
           

            fetch(`${this.$apiUrl}categories/sections`)
                .then(res => res.json())
                .then(dataItems => {
                    me.sections = dataItems
                    me.newArraivals = me.sections[0].products
                    me.bestsellers = me.sections[1].products

                    me.newArraivals.map( p => {
                        if(p.image){
                            p.image.url = `${me.$apiUrlBase + p.image.url}`
                        }                        
                    })
                    me.bestsellers.map( p => {
                        if(p.image){
                            p.image.url = `${me.$apiUrlBase + p.image.url}`
                        }
                        
                    })

                    console.log('newArraivals',me.newArraivals)
                })
                .catch(error => {
                    console.error('Error:', error)
                })
        }

    }
}
</script>
<style scoped>
    .cards-category{
        display: flex;
        align-items: flex-end;
    }
    .cards-category .v-card__actions{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin: 0;
        padding: 0;
    }
    .card-entrega-inmediata{
        background-image: url('../assets/entrega_inmediata.png');
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 125px;
    }
    .button-category{
        background-color: #212121 !important;
        color: #ffffff;
    }
    .card-new-arrive{
        background-image: url('../assets/newarrivals.png');
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 125px;
    }
    .category-text{
        color: gray;
        padding: 0 16px;
    }
    .price-text{
        color: #f06292 !important;
        padding: 0 16px;
        font-weight: 500;
    }
    .products{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .box-product{
        width: 49%;
        margin-bottom: 5px;
    }
    .product-titles{
        font-size: 1em;
        padding-bottom: 0;
    }
    .card-best-seller{
        background-image: url('../assets/bestsellers.png');
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 125px;
    }
</style>
