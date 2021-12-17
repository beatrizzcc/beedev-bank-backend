/*{
    "status": "success",
    "data": [
      {
        "name": "Beatriz Carvalho",
        "userImage": "./assets/img/user_pic.jpg",
        "nps": 4,
        "status": 2,
        "comment": "",
        "createdAt": "2021-10-01T10:14:17.000Z",
        "message": "Olá, recebemos seu feedback sobre o artigo Artigo1-beedev-BIA, e já está em análise, logo iremos te retornar. Agradecemos pelo seu feedback.",
        "messagePrivate": "Esse caso já está em análise.",
        "systemic": null,
        "systemicStatus": 2
      },
      {
        "name": "Beatriz Carvalho",
        "userImage": "./assets/img/user_pic.jpg",
        "nps": 4,
        "status": 2,
        "comment": "",
        "createdAt": "2021-09-30T12:11:44.000Z",
        "message": "",
        "messagePrivate": "",
        "systemic": 1,
        "systemicStatus": 1
      }
    ],
    "meta": {
      "total": 2
    },
    "lastRate": [
      {
        "id": 123,
        "surveyId": 60,
        "surveyNpsId": 4,
        "userId": 123462,
        "helpId": 17679,
        "helpTitle": "Artigo1-beedev-BIA",
        "comment": "",
        "active": 1,
        "createdAt": "2021-09-30T12:11:44.000Z",
        "userName": "Beatriz Carvalho",
        "status": 2
      }
    ]
  }*/



/*
 var result =  {
    "status": "success",
    "data": [
      {
        "name": "Beatriz Carvalho",
        "userImage": "./assets/img/user_pic.jpg",
        "nps": 4,
        "status": 3,
        "comment": "agora melhorou",
        "createdAt": "2021-10-01T14:33:58.000Z",
        "message": "ola, muito obrigado por seu feedback, ajudou a melhorar esse artigo!",
        "messagePrivate": "esse caso foi concluído.",
        "systemic": null,
        "systemicStatus": 3
      },
      {
        "name": "Beatriz Carvalho",
        "userImage": "./assets/img/user_pic.jpg",
        "nps": 4,
        "status": 3,
        "comment": "agora melhorou",
        "createdAt": "2021-10-01T14:32:18.000Z",
        "message": "",
        "messagePrivate": "",
        "systemic": 1,
        "systemicStatus": 2
      },
      {
        "name": "Beatriz Carvalho",
        "userImage": "./assets/img/user_pic.jpg",
        "nps": 2,
        "status": 2,
        "comment": "podia ser melhor",
        "createdAt": "2021-10-01T14:29:50.000Z",
        "message": "Olá, recebemos seu feedback sobre o artigo Artigo4-beedev-teste-bia, e já está em análise, logo iremos te retornar. Agradecemos pelo seu feedback.",
        "messagePrivate": "Vou analisar esse caso e ver onde da pra melhorar.",
        "systemic": null,
        "systemicStatus": 2
      },
      {
        "name": "Beatriz Carvalho",
        "userImage": "./assets/img/user_pic.jpg",
        "nps": 2,
        "status": 2,
        "comment": "podia ser melhor",
        "createdAt": "2021-10-01T14:24:31.000Z",
        "message": "",
        "messagePrivate": "",
        "systemic": 1,
        "systemicStatus": 1
      }
    ],
    "meta": {
      "total": 4
    },
    "lastRate": [
      {
        "id": 129,
        "surveyId": 61,
        "surveyNpsId": 4, //estrela
        "userId": 123462,
        "helpId": 17682,
        "helpTitle": "Artigo4-beedev-teste-bia",
        "comment": "agora melhorou",
        "active": 1,
        "createdAt": "2021-10-01T14:24:30.000Z",
        "userName": "Beatriz Carvalho",
        "status": 3
      }
    }
 ]*/


//var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0ZWFtIjp7ImlkIjoxODIsInN1YmRvbWFpbiI6ImhtbCIsImRiTnVtYmVyIjoxfSwiaWQiOjEyMzQ2MiwiZ3JvdXBzSWRzIjoiMzIwMiwzMjA2LDMyMDciLCJ1c2VyVHlwZSI6MiwidGVhbUlkIjoxODIsImV4cCI6MTYzNDMzNTExNCwidXNlclByaXZhY3kiOjEsImNoYW5nZVBhc3N3b3JkIjowfQ.crCqjzjkfSt9sv3TfWIrxRC0lOa9beFVuV-iS7wO3Ng'



  $(document).ready(function(){

   changeByVue()
    
  })
  


function changeByVue(){
    new Vue ({
      el: '#app',
      data() {
        //let token = localStorage.getItem('token')

        return{
         // userMessage: '',
          //modMessage: 'Vou analisar esse caso e ver onde da pra melhorar. ',
          username: '',
          password: '',
          //loginProp: (token) ? true : false,
          //resultApi: {
           // status: false
          //},
         // token,


        }
        
      },
      
          /*mounted(){
            const request = axios.get('localhost:3000/api/compras')

            request
            .then((result) => {
                console.log(result)
            })
            .catch((err) => {
                console.log(err)
            })


        }
        */

     /* mounted(){
        if(this.loginProp){
          this.readModerationHistory()
        }
      },*/

      methods: {
            login() {
              const username = this.username;
              const password = this.password;
          
              let config = {
                  url: 'https://hml-api.beedoo.io:4020/login',
                  method: 'POST',
                  data: {
                      subdomain: 'hml'
                  },
                  crossDomain: true,
                  beforeSend: function (xhr) {
                      const pwEncrypted = btoa(username + ":" + password);
                      xhr.setRequestHeader("Authorization", "Basic " + pwEncrypted);
                  },
                  success: (result) => {
                      console.log(result);
                      //this.token = result.token;
                      //this.loginProp = true;
                      localStorage.setItem('token', result.token)
                      window.location.href = '/history.html'
                      //this.readModerationHistory();
                  },
                  error: (res) => {
                      console.log('login error!')
                      console.log(res)
                  },
              }
          
              $.ajax(config);
          },
          /*loginEnter(evento){
            $(".login100-form-btn").onkeypress = function (evento){
    
              if(evento.key === 'Enter'){
                 //login()
                 alert('apertou o enter')
              }
            }
          },*/
          loginEnter(evento){
            
    
            evento.onkeypress = function (evento){
              if(evento.key === 'Enter'){
                 //login()
                 alert('apertou o enter')
              }
            }
          
          }
          /*readModerationHistory(){
            let config = {
              url: 'https://hml-api.beedoo.io:4020/admin/api/v1/survey/moderation-history/61/article/17682/user/123462',
              method: 'GET',
              crossDomain: true,
              beforeSend: (xhr) => {
                console.log(xhr)
                xhr.setRequestHeader("Authorization", "Bearer " + this.token)
        
              },
              success: (result) => {
                //changeHTML(result) 
                //changeByVue(result)
                result.status = true
                this.resultApi = result

                this.userMessage = 'Olá, recebemos seu feedback sobre o artigo ' + `${this.resultApi.lastRate[0].helpTitle}` + ' e já está em análise, logo iremos te retornar. Agradecemos pelo seu feedback.'
              },
              error: (res) => {
                console.log('error')
                console.log(res)
                this.token = '';
                this.loginProp = false;
                localStorage.clear()
              }
        
        
        
            }
        
        $.ajax(config);
        
        
        },*/

        /*getImgUser(urlImg){
          return {
            'background-image': 'url(' + urlImg + ')'
          }
        },

        saveAndSend(){
          alert('clicou salvou e enviou')
        },
       
        createDate(itemDate){
          return dateCreate(itemDate)
        
        },
        changeClassStar(idx, itemSurveyNps){
          return (idx < itemSurveyNps) ? 'fas fa-star orange' : 'fas fa-star gray'
        },
        createStatus(item){
          const threeStatus = [
            'Aberto',
            'Em análise',
            'Concluído'
          ]
          const ifStatus = (item.systemicStatus) ? item.systemicStatus : item.status;
          const status = threeStatus[ifStatus - 1]

          return status
          
        },
        saveAndSend(){
          console.log('aquii')
          console.log(this.userMessage)
          console.log(this.modMessage)
          if(this.userMessage === '' || this.modMessage === ''){
            alert('a mensagem não pode ser enviada vazia')

          }
        },*/
      

      }
    })
}

 /* function changeHTML(result){

    const containerHistory = document.getElementById('history')
  
    
    for(const item of result.data){
      console.log(item)
      containerHistory.appendChild(createHistory(item))
    }
    
   
  }
  function starsFeedback(result){
     
    let stars = result
    //console.log(stars)

    let star = document.getElementsByClassName('stars')[0]

    let qttd = 0;
    while(qttd < 5){

    
      let starFeedback = document.createElement('i')
      starFeedback.setAttribute('class', 'fa-star')

      if(qttd < stars){
        starFeedback.classList.add('fas')
      }else{
        starFeedback.classList.add('far')
      }

      star.appendChild(starFeedback)
      qttd++
     
      
    }
    return star

  }

function createHistory(item){
  
    
    const containerHistoryItem = document.createElement('div');
    containerHistoryItem.setAttribute('class', 'history-item');
   
    const containerInfoUser = document.createElement('div');
    containerInfoUser.setAttribute('class', 'info-user pull-left')
    containerHistoryItem.appendChild(containerInfoUser)

    const userImg = createImg(item.userImage)
    containerInfoUser.appendChild(userImg)

    const containerInfo = document.createElement('div');
    containerInfo.setAttribute('class', 'pull-left')
    containerInfoUser.appendChild(containerInfo)

    const name = createUserName(item.name)
    containerInfo.appendChild(name)

    const date = inserirDate(item.createdAt)
    containerInfo.appendChild(date)

    const status = createStatus(item)
    containerInfo.appendChild(status)

    //const starsUser = createStars(item.nps)
    //containerInfo.appendChild(starsUser)

    //const starsUser = createStar2(item.nps)
    //containerInfo.appendChild(starsUser)

    const starsUser = createStar3(item.nps)
    containerInfo.appendChild(starsUser)

    containerInfoUser.appendChild(createClearfix())


   const containerInfoMsg = document.createElement('div');
   containerInfoMsg.setAttribute('class', 'info-messages pull-left')
   containerHistoryItem.appendChild(containerInfoMsg)


   const messageForUserGeral = createMessageUser(item.message)
   containerInfoMsg.appendChild(messageForUserGeral)

   const messageForMod = createMessageMod(item.messagePrivate)
   containerInfoMsg.appendChild(messageForMod)

   containerInfoMsg.appendChild(createClearfix())

   const feedbackUser = createFeedbackUser(item.comment)
   containerInfoMsg.appendChild(feedbackUser)

  
   containerHistoryItem.appendChild(createClearfix())

   return containerHistoryItem

}
function createImg(imgPerfileSrc){
    const containerImg = document.createElement('div');
    containerImg.setAttribute('class', 'pull-left')

    const userPerfileImg = document.createElement('div')
    userPerfileImg.setAttribute('class', 'user-img')
    userPerfileImg.style.backgroundImage = 'url(' + imgPerfileSrc + ')'
    containerImg.appendChild(userPerfileImg)

    return containerImg

}

function createUserName(itemName){
  const username = document.createElement('div');
  username.setAttribute('class', 'name')
  username.innerHTML = itemName

  return username
}

function createStatus(item){
  const status = document.createElement('div');
  status.setAttribute('class', 'status-info-user')
  let threeStatus = [
    'Aberto',
    'Em análise',
    'Concluído'
  ]
  console.log(threeStatus)
  status.innerHTML = threeStatus[getStatus(item) -1]
  console.log(status)
  //status.innerHTML = itemStatus
 // return (history.systemicStatus) ? history.systemicStatus : history.status;

 
  return status
}

function getStatus(item){
  return (item.systemicStatus) ? item.systemicStatus : item.status;
}

function createStars(itemNps){
  //console.log(itemNps)
  const starsInfoUser = document.createElement('span')
  starsInfoUser.setAttribute('class', 'stars-user')

 
  let i = 0
  while(i < 5){
    

    const starUser = document.createElement('i')
    starUser.setAttribute('class', 'far fa-star')


    if(i < itemNps){
      starUser.classList.remove('far')
      starUser.classList.add('fas')
    }

    starsInfoUser.appendChild(starUser)

    i++
  
  }

  return starsInfoUser

}

function createStar2(itemNps){
  let numberStars = 5;
  const containerStar = document.createElement('span')
  containerStar.setAttribute('class', 'stars-user')

  while(numberStars){
    const starUser = document.createElement('i')
    starUser.setAttribute('class', 'far fa-star')
    containerStar.appendChild(starUser)
    numberStars--
  }
  while(itemNps){
    const star = containerStar.getElementsByTagName('i')[itemNps-1]
    star.classList.remove('far')
    star.classList.add('fas')
    itemNps--;
  }
  return containerStar

  
}

function createStar3(itemNps){

  const starsInfoUser = document.createElement('span')
  starsInfoUser.setAttribute('class', 'stars-user')

 
  let i = 0
  while(i < 5){
    

    const starUser = document.createElement('i')
   
   /* if(i < itemNps){
      starUser.classList.remove('far')
      starUser.classList.add('fas')
    }*/
    /*const changeClassStar = (i < itemNps) ? 'fas' : 'far';
    starUser.setAttribute('class', 'fa-star ' + changeClassStar )


    starsInfoUser.appendChild(starUser)

    i++
  
  }

  return starsInfoUser
 


}

function createMessageUser(itemForUser){
  const messageUser = document.createElement('div');
  messageUser.setAttribute('class', 'send-message pull-left')


    
    const forUserMsg = document.createElement('div');
    forUserMsg.innerHTML= 'Para usuários: '
    messageUser.appendChild(forUserMsg)
  
    const msgUser = document.createElement('div');
    msgUser.setAttribute('class', 'for-user-msg')

    if(itemForUser === ""){
      forUserMsg.classList.add('hide')
      msgUser.classList.add('hide')
    
    }
  
    msgUser.innerHTML = itemForUser
    messageUser.appendChild(msgUser)
  
      return messageUser
 

}

function createMessageMod(itemForMod){
  const messageMod = document.createElement('div');
  messageMod.setAttribute('class', 'send-message pull-left')

  const forModMsg = document.createElement('div')
  forModMsg.innerHTML = 'Para moderadores:'
  messageMod.appendChild(forModMsg)

  const msgMod = document.createElement('div');
  msgMod.setAttribute('class', 'for-mod-msg')

  if(itemForMod === ""){
    forModMsg.classList.add('hide')
    msgMod.classList.add('hide')
   // return
  }
  msgMod.innerHTML = itemForMod
  messageMod.appendChild(msgMod)

  return messageMod
}

function createFeedbackUser(itemComment){
  const opinionFeedbackUser = document.createElement('div');
  opinionFeedbackUser.setAttribute('class', 'opinion');

  const forFeedbackUser = document.createElement('div');
  //forFeedbackUser.setAttribute('class', 'opinion')
  forFeedbackUser.innerHTML = 'Feedback do usuário:'
  opinionFeedbackUser.appendChild(forFeedbackUser)

  const commentUserFeedback = document.createElement('div');
  commentUserFeedback.setAttribute('class', 'comment');
  commentUserFeedback.innerHTML = itemComment
  opinionFeedbackUser.appendChild(commentUserFeedback)

  return opinionFeedbackUser

}


function createClearfix(){

  const clearfix = document.createElement('div')
  clearfix.setAttribute('class', 'clearfix')

  return clearfix
}

  function dateCreate(itemDate){
      //let replaceDate = itemDate.replace('T', ' ').replace('Z', ' ')
      //console.log(replaceDate)
      let data = new Date(itemDate)
      //console.log(data)

      let meses = [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12'
      ]

      let dia = addZero(data.getUTCDate())
      let mes = meses[data.getMonth()]
      let ano = addZero(data.getFullYear())
      let hora = addZero(data.getUTCHours())
      let min = addZero(data.getMinutes())
      
      let date = dia + '/' + mes + '/' + ano + ' ' + hora + ':' + min
      console.log(date)
      //document.getElementsByClassName('user-date').innerHTML = date

      return date
  }

  function inserirDate(itemDate){
    const divDate = document.createElement('div');
    divDate.setAttribute('class', 'user-date')
    //divDate.innerHTML = itemDate
    divDate.innerHTML = dateCreate(itemDate)

    return divDate
  }

  function addZero(number){
    return (number <10)? '0' + number: number

}*/

  //dateCreate()