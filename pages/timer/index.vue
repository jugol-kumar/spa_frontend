<template>
     <div class="bg-slate-800 h-screen">
        <div class="container mx-auto flex flex-col items-center justify-center pt-16">
            <h1 class="text-6xl font-semibold text-white">Hot Dills Timer</h1>

            <div class="text-2xl font-semibold text-slate-50" ref="setTimer">
               {{  setTime }}
            </div>

            <div class="mt-16 flex gap-8">
                <div class="flex flex-col items-center">
                    <div class="w-32 h-20 bg-slate-500 shadow-lg rounded-lg flex items-center justify-center font-bold text-white text-2xl">
                        {{ days }}
                    </div>
                    <p class="text-2xl text-white font-semibold">Days</p>
                </div>
                <div class="flex flex-col items-center">
                    <div class="w-32 h-20 bg-slate-500 shadow-lg rounded-lg flex items-center justify-center font-bold text-white text-2xl">
                        {{ hours }}
                    </div>
                    <p class="text-2xl text-white font-semibold">Hour</p>
                </div>
                <div class="flex flex-col items-center">
                    <div class="w-32 h-20 bg-slate-500 shadow-lg rounded-lg flex items-center justify-center font-bold text-white text-2xl">
                        {{ minuts }}
                    </div>
                    <p class="text-2xl text-white font-semibold">Min</p>
                </div>
                <div class="flex flex-col items-center">
                    <div class="w-32 h-20 bg-slate-500 shadow-lg rounded-lg flex items-center justify-center font-bold text-white text-2xl">
                        {{ seconds }}
                    </div>
                    <p class="text-2xl text-white font-semibold">Sec</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


    const isShowDills = ref(true)
    const setTime = ref("17 July 2023 03:03:00 pm");
    const days = ref(0)
    const hours = ref(0)
    const minuts = ref(0)
    const seconds = ref(0)

    const clock = () =>{
        const endTimeStamp = new Date(setTime.value);
        const nowTimeStamp = new Date();
        const diffTimeStamp = (endTimeStamp - nowTimeStamp) / 1000;
        if(diffTimeStamp < 0) {
            alert("coundown complate");
            clearInterval(interval)
            isShowDills.value = false;
            return;
        } 
        
        // cal diff days
        days.value  = Math.floor(diffTimeStamp / 3600 / 24); // number of days
        // cal diff hour
        hours.value = Math.floor((diffTimeStamp / 3600) % 24)
        // min diff cal
        minuts.value = Math.floor((diffTimeStamp / 60) % 60)
        // sec diff cal
        seconds.value = Math.floor(diffTimeStamp % 60)
    }


    const interval = setInterval(() => {
        if(isShowDills.value){
            clock()
        }
    }, 1000);



</script>

<style>

</style>