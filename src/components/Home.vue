<script setup>

</script>

<template>
    <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-carousel cycle>
                    <v-carousel-item src="/carousel1.jpg" cover ></v-carousel-item>
                    <v-carousel-item src="/carousel2.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/carousel3.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/carousel4.jpg" cover></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </v-container>
<!-- About Us -->
 <v-container class="bg-secondary" max-width="100%">
    <v-row>
        <v-col class="text-center">
            <div class="text-display-medium mb-12" > Welcome to AgriShamba!</div>
            <div class="text-title-large font-weight-light text-medium-emphasis mb-8 text-white">Welcome to AgriShamba, a vibrant digital marketplace where fresh, sustainably grown produce meets the convenience of your screen. The homepage immediately connects you to the heart of the farm, featuring a live "Harvest Tracker" that shows exactly what fruits and vegetables are peaking this week. With its warm, earthy design and intuitive navigation, visitors can effortlessly browse seasonal organic boxes, sign up for the local CSA program, or explore quick, farm-fresh recipes.</div>
            <div class="text-title-large font-weight-light text-medium-emphasis mb-8 text-white">More than just a store, Shamba Online serves as a community hub bridging the gap between local agriculture and your kitchen. A streamlined, secure checkout makes supporting sustainable farming seamless, while a dedicated backyard-gardening blog offers practical tips for eco-conscious shoppers. Complete with glowing customer reviews and a schedule of upcoming community harvest days, the page turns everyday grocery shopping into a meaningful connection with the land.</div>
        </v-col>
    </v-row>
 </v-container>

<!-- Offers -->
 <v-container max-width="100%">
    <v-row>
        <v-col md="3">
            <v-card>
                <v-img src="/tomatohome.jpg" cover></v-img>
                <v-card-title>Tomatoes</v-card-title>
                <v-card-subtitle>Ksh 100 per kg</v-card-subtitle>
                <v-spacer></v-spacer>
                <v-btn to="/product_detail" color="primary">View</v-btn>
            </v-card>
        </v-col>
        <v-col md="3">
            <v-card>
                <v-img src="/garlichome.jpg" cover></v-img>
                <v-card-title>Garlic</v-card-title>
                <v-card-subtitle>Ksh 200 per kg</v-card-subtitle>
                 <v-spacer></v-spacer>
                <v-btn to="/product_detail" color="primary">View</v-btn>
            </v-card>
        </v-col>
        <v-col md="3">
            <v-card>
                <v-img src="/bellpeppershome.jpg" cover></v-img>
                <v-card-title>Bellpeppers</v-card-title>
                <v-card-subtitle>Ksh 150 per kg</v-card-subtitle>
                <v-spacer></v-spacer>
                <v-btn to="/product_detail" color="primary">View</v-btn>
            </v-card>
        </v-col>
        <v-col md="3">
            <v-card>
                <v-img src="/eggshome.jpg" cover></v-img>
                <v-card-title>Eggs</v-card-title>
                <v-card-subtitle>Ksh 150 per kg</v-card-subtitle>
                 <v-spacer></v-spacer>
                <v-btn to="/product_detail" color="primary">View</v-btn>
            </v-card>
        </v-col>
    </v-row>
 </v-container>

 <!-- Footer -->
  <v-container class="bg-primary" max-width="100%">
    <v-row>
        <v-col>
            <div align="center">
                <router-link to="/">
                    <v-img src="/shambalogo3.png" width="50%" height="50%" ></v-img>
                </router-link>

                <p> Copyright Shamba Online &copy; 2026</p>
            </div>
        </v-col>
        <v-col md="4" >
            <div class="text-center">
                <p>Follow us on:</p>
                <v-icon icon="mdi-instagram"></v-icon>
                <v-icon icon="mdi-twitter"></v-icon>
                <v-icon icon="mdi-facebook"></v-icon>
            </div>
        </v-col>
        <v-col md="4">
            <div class="text-center">
                <p> Contact Us:</p>
                <p>Email: info@shambaonline.com</p>
                <p>Phone: 254712345789</p>
            </div>
        </v-col>
    </v-row>
  </v-container>
</template>