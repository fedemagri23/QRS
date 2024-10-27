<template>
    <v-container class="bg-black d-flex flex-column align-center justify-center w-100 h-100 pa-0" style="">
        <v-btn  @click="goToRoute({ name: 'Tickets' })" class="bg-blue" style="height: 82px; width: 82px; position: absolute; top: 40px; left: 30px;">

        </v-btn>
        <v-container class="bg-yellow  d-flex flex-column align-center justify-center w-100 h-100 pa-0">
            <img src="/src/assets/imgs/qr1.jpeg" class="w-100 h-100 ma-0" style="object-fit: cover;" />
        </v-container>
        <v-container class="bg-green  d-flex flex-column align-center justify-center w-100 h-100 pa-0">
            <img src="/src/assets/imgs/under.jpg" class="w-100 h-100 ma-0" style="object-fit: cover;" />
        </v-container>
    </v-container>
</template>

<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();
  
    const goToRoute = (route) => {
        router.push(route);
    };
</script>