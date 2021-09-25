import axios from "axios"
export default {
    actions: {
        async getTask(ctx){
            const path = 'http://localhost:5000/tasks';
            var data;
            var userInfo={
                login:localStorage.login,
                token:localStorage.token
            }
            axios.get(path, userInfo)
              .then((res) => {
                data = res.data;
                ctx.commit('updateTask', data)
              })
              .catch((error) => {
                console.error(error);
              }); 
        },
        async getTeam(ctx){
            const path = 'http://localhost:5000/team';
            var data;
            var userInfo={
                login:localStorage.login,
                token:localStorage.token
            }
            axios.get(path, userInfo)
              .then((res) => {
                data = res.data;
                ctx.commit('updateTeam', data)
              })
              .catch((error) => {
                console.error(error);
              }); 
        },
        async getLiderboard(ctx){
            const path = 'http://localhost:5000/liderboard';
            var data;
            var userInfo={
                login:localStorage.login,
                token:localStorage.token
            }
            axios.get(path, userInfo)
              .then((res) => {
                data = res.data;
                ctx.commit('updateTeam', data)
              })
              .catch((error) => {
                console.error(error);
              }); 
        },
        async getUserRating(ctx){
            const path = 'http://localhost:5000/userrating';
            var data;
            var userInfo={
                login:localStorage.login,
                token:localStorage.token
            }
            axios.get(path, userInfo)
              .then((res) => {
                data = res.data;
                ctx.commit('updateUserRating', data)
              })
              .catch((error) => {
                console.error(error);
              }); 
        },
        async getOrganization(ctx){
            const path = 'http://localhost:5000/organization';
            var data;
            var userInfo={
                login:localStorage.login,
                token:localStorage.token
            }
            axios.get(path, userInfo)
              .then((res) => {
                data = res.data;
                ctx.commit('updateOrg', data)
              })
              .catch((error) => {
                console.error(error);
              }); 
        },
        async readyCard(ctx, id){
            const path = 'http://localhost:5000/update_task';
            var data;
            var taskInfo={
                task_id:id,
            }
            axios.post(path, taskInfo)
              .then((res) => {
                data = res.data;
                ctx.commit('updateTask', data)
              })
              .catch((error) => {
                console.error(error);
              }); 
        }

    },
    mutations: {
        updateTask(state, worker){
            state.worker=worker
        },
        updateTeam(state, team){
            state.team=team
        },
        updateLider(state, lider){
            state.lider=lider
        },
        updateOrg(state, org_name){
            state.org_name=org_name
        },
        updateUserRating(state, user_rating){
            state.user_rating=user_rating
        }

    },
    getters: {
        TaskWorker(state){
            return state.worker;
        },
        TeamWorker(state){
            return state.team;
        },
        Liderboard(state){
            return state.lider;
        },
        Organization(state){
            return state.org_name;
        },
        userRating(state){
            return state.user_rating;
        }
    },
    state: {
        worker:[
            {
                name:'Микульский Никита',
                proffesion:'дизайнер',
                id:'0',
                tasks:[
                    {
                        name:'нарисовать картинки',
                        time:'25.09.2021',
                        level:'100',
                        description:'нарисовать картинки на лендинг',
                        status:'inactive',
                        id:'0',
                        user_id:'0'
                    },
                    {
                        name:'сделать canvas',
                        time:'26.09.2021',
                        level:'200',
                        description:'нарисовать офис на канвасе',
                        status:'active',
                        id:'1',
                        user_id:'0'
                    }
                ]
            },
            {
                name:'Цветков Роман',
                proffesion:'разработчик',
                id:'1',
                tasks:[
                    {
                        name:'нарисовать картинки',
                        time:'25.09.2021',
                        level:'100',
                        description:'нарисовать картинки на меню и команду',
                        status:'active',
                        id:'0',
                        user_id:'1'
                    },
                    {
                        name:'шаблонизировать запросы в json',
                        time:'26.09.2021',
                        level:'200',
                        description:'шаблонизировать запросы в json на flask',
                        status:'active',
                        id:'1',
                        user_id:'1'
                    }
                ]
            },
            {
                name:'Четвергтаков Иван',
                proffesion:'разработчик',
                id:'2',
                tasks:[
                    {
                        name:'создать БД',
                        time:'25.09.2021',
                        level:'300',
                        description:'создать базу данных на PostgreSQL',
                        status:'inactive',
                        id:'0',
                        user_id:'2'
                    },
                    {
                        name:'написать запросы',
                        time:'26.09.2021',
                        level:'500',
                        description:'Написать запросы на все функции',
                        status:'active',
                        id:'1',
                        user_id:'2'
                    },
                    {
                        name:'поднять сервер',
                        time:'26.09.2021',
                        level:'500',
                        description:'Поднять сервер и настроить CORS',
                        status:'active',
                        id:'2',
                        user_id:'2'
                    },
                    {
                        name:'Выспаться',
                        time:'26.09.2021',
                        level:'500',
                        description:'Хорошенько поспать',
                        status:'active',
                        id:'3',
                        user_id:'2'
                    }
                ]
            },
            {
                name:'Столбов Михаил',
                proffesion:'мигрант',
                id:'3',
                tasks:[
                    {
                        name:'получить паспорт',
                        time:'10.09.2017',
                        level:'10',
                        description:'получить Российское гражданство',
                        status:'stillactive',
                        id:'0',
                        user_id:'3'
                    },
                    {
                        name:'нарисовать картинок',
                        time:'26.09.2021',
                        level:'500',
                        description:'Картинки!',
                        status:'active',
                        id:'1',
                        user_id:'3'
                    }
                ]
            }
        ],
        team:[
            {
                name:'Микульский Никита',
                proffesion:'дизайнер',
                img:require(`@/assets/img/team_icon_2.png`),
                mail:'makaka@gmail.com',
                phone:'+7(814)-233-22-11',
                tg:'',
                vk:'',
                fb:'',
                work:'Работа не вовк',
                ttd:'12:36:56',
                position:0,
                rating:'200',
                id: 0,
                teamName:'Cheemsburger',
                skills:[
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        tooltip:'елда',
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        tooltip:'елда',
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        tooltip:'елда',
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        tooltip:'елда',
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        tooltip:'елда',
                    }
                ]
            },
            {
                name:'Микульский Никита',
                proffesion:'дизайнер',
                img:require(`@/assets/img/Worker_icon.png`),
                mail:'makaka@gmail.com',
                phone:'+7(814)-233-22-11',
                tg:'',
                vk:'',
                fb:'',
                work:'Работа не вовк',
                ttd:'12:36:56',
                position:1,
                rating:'200',
                id: 1,
                skills:[
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    }
                ]
            },
            {
                name:'Микульский Никита',
                proffesion:'дизайнер',
                img:require(`@/assets/img/Worker_icon.png`),
                mail:'makaka@gmail.com',
                phone:'+7(814)-233-22-11',
                tg:'',
                vk:'',
                fb:'',
                work:'Работа не вовк',
                ttd:'12:36:56',
                position:2,
                rating:'200',
                id: 2,
                skills:[
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    },
                    {
                        img:require('@/assets/img/Office_icon_re.png'),
                        
                    }
                ]
            }
        ],
        lider:[
            {
                name:'хуейм',
                rating:'500',
                position:'1'
            },
            {
                name:'хуейм',
                rating:'500',
                position:'2'
            },
            {
                name:'хуейм',
                rating:'500',
                position:'3'
            },
            {
                name:'хуейм',
                rating:'500',
                position:'4'
            }
        ],
        org_name:'МИКУЛЬСКАЯ',
        user_rating:{
            rating: '300',
            position: '2'
        }
    }
}