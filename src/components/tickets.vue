<template>
    <v-container class="bg-black d-flex flex-column align-center justify-center w-100 h-100 pa-0" style="">
        <v-btn @click="goToRoute({ name: 'Qr1' })" class="bg-blue" style="height: 82px; width: 200px; position: absolute; top: 65vh; left: 15vh;">

        </v-btn>
        <v-container class="bg-yellow  d-flex flex-column align-center justify-center w-100 h-100 pa-0">
            <img src="/src/assets/imgs/tickets.jpg" class="w-100 h-100 ma-0" style="object-fit: cover;" />
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