<template>
    <footer class="footer" color="primary">        
        <div class="menu">
            <div class="menu-item">
                <v-icon class="">mdi-home-outline</v-icon>
                <span>Categorías</span>
            </div>
            <div class="menu-item">
                <v-icon class="">mdi-badge-account-outline</v-icon>
                <span>Catálogo</span>
            </div>
            <div class="menu-item">
                <v-icon class="">mdi-cart-outline</v-icon>
                <span>Carrito</span>
            </div>
        </div>              
    </footer>
</template>
<script>
export default {
    name: 'TsFooter'
}
</script>
<style scoped>
    footer{
        height: 60px;
        width: 100%;
        position: fixed;
        bottom: 0;
        box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
    }
    .menu{
        height: inherit;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        
    }
    .menu-item{
        display: flex;
        flex-direction: column;
    }
</style>