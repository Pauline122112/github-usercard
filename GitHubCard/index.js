import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/Pauline122112')
 
.then(response => {
  //PROVIDES THE IMAGE
  userInfo.appendChild(cardMaker(response.data))
  console.log('response to property', response.data)
  
})

.catch(err => {
  debugger
  console.log(err)
})


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = [
//     'tetondan,'
//     'dustinmyers'
//     'justsml',
//     'luishrd',
//     'bigknell'
// ]

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const userInfo = document.querySelector('.cards')
function cardMaker(object){
  const card = document.createElement('div')
  const avatar = document.createElement('img')
  const cardInfo = document.createElement('div')
  const headerName = document.createElement('h3')
  const userName = document.createElement('p')
  const paraLocation = document.createElement('p')
  const profile = document.createElement('p')
  const userAddress = document.createElement('a')
  const userFollower = document.createElement('p')
  const myFollow = document.createElement('p')
  const bioLink = document.createElement('p')


  card.appendChild(avatar)
  card.appendChild(cardInfo)
  cardInfo.appendChild(headerName)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(paraLocation)
  cardInfo.appendChild(profile)
  profile.appendChild(userAddress)
  cardInfo.appendChild(userFollower)
  cardInfo.appendChild(myFollow)
  cardInfo.appendChild(bioLink)


  card.classList.add('card')
  cardInfo.classList.add('card-info')
  headerName.classList.add('name')
  userName.classList.add('username')

  avatar.src = object.avatar_url //image
  // avatar.alt = `Image`          //image
  headerName.textContent = object.name //h3
  userName.textContent = object.login //p
  paraLocation.textContent = `Location: ${object.location}` //p
  profile.textContent = `Profile: `
  userAddress.href = object.html_url //a
  userFollower.textContent = `Followers: ${object.followers}`
  myFollow.textContent = `Following: ${object.following}`
  bioLink.textContent = `Bio: ${object.bio}`




return card

}

 console.log(cardMaker)

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
    */
