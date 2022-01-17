const APP_ID = '134ab839834747f2936ec4db7ac86d11'
const CHANNEL = 'first'
const TOKEN = '006134ab839834747f2936ec4db7ac86d11IABOnaQXJFH0h8EdLz4h4wBfQnWEmUnwqKNfyafQ2X5O7lfucZIAAAAAEABLPQ3Jgd3mYQEAAQCC3eZh'

let UID;

const client = AgoraRTC.createClient({mode: 'rtc', codec: 'vp8'})
let localTracks = []
let remoteUsers = {}
let joinAnddisplaystream = async () =>{
    UID = await client.join(APP_ID, CHANNEL, TOKEN, null)

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()

    let player = ` <div class="video-container" id="user-container-${UID}">
                    <div class="username-wrapper"><span class="user-name">My Name</span></div>
                    <div class="video-player" id="user-${UID}"></div>
                </div>`

    document.getElementById('video-streams').insertAdjacentElement('beforeend', player)
    localTracks[1].play(`user-${UID}`)
    await client.publish([localTracks[0], localTracks[1]])
}

joinAnddisplaystream()