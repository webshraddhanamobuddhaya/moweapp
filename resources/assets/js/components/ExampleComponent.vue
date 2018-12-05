<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                        <h2>{{loading}}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                loading: 'loading...'
            }
        },
        mounted() {
            var config = {
                headers: {
                    'Access-Control-Allow-Origin': 'http://www.shraddha.lk/stvapi/public/',
                    
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                    }
            };
            let api= '/api/videos';
            // let api= 'https://api.coindesk.com/v1/bpi/currentprice.json';
            // let api= 'https://jsonplaceholder.typicode.com/todos/1';
            axios.get(api).then((response) => {
                 console.log(response);
                 this.loading = 'finished';
            });
            // console.log('Component mounted.')

        }
    }
</script>
