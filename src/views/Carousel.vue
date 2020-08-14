<template>
  <v-carousel  height="250">
        <v-carousel-item
        v-for="(item,i) in sliders"
        :key="i"
        :src="item"
        ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    name: 'Carousel',
    components: {},
    data () {
      return {
        sliders: [],
      }
    },

    created() {
        this.getCategories()
    },

    methods: {
      getCategories() {
            let me = this
           

            fetch(`${this.$apiUrlV2}categories`)
                .then(res => res.json())
                .then(dataItems => {
                    for (let i = 0; i < 3; i++) {
                        
                        const img = dataItems[i].image;
                        me.sliders.push(`${me.$apiUrlBase + img}`)
                        
                    }

                    console.log('sliders', me.sliders)
                })
                .catch(error => {
                    console.error('Error:', error)
                })
        },
    }
}
</script>
