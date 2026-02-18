module.exports = {
    components:{
        schemas:{
            task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"user identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"title of task",
                        example:"check email"
                    },

                    completed:{
                        type:'boolean',
                        description:"to know if task is done",
                        example:"completed"
                    },
                }   
            }
        }
    }
}
