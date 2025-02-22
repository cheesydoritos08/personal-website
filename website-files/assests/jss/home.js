
const phrases = [
    "Evil is always possible. And goodness is eternally difficult.",
    "The world changes, we do not, therein lies the irony that kills us.",
    "The only power that exists is inside ourselves.",
    "Like all strong people, she suffered always a measure of loneliness; she was a marginal outsider, a secret infidel of a certain sort.",
    "It was as if the empty nights were made for thinking of him. And sometimes I found myself so vividly aware of him it was as if he had only just left the room and the ring of his voice were still there. And somehow, there was a disturbing comfort in that, and, despite myself, I’d envision his face.",
    "Do you know what it means to be loved by Death?... Do you know what it means to have Death know your name?",
    "As if the night had said to me, ‘You are the night and the night alone understands you and enfolds you in its arms’ One with the shadows. Without nightmare. An inexplicable peace.",
    "How pathetic it is to describe these things which can't truly be described.",
    "I was a newborn vampire, weeping at the beauty of the night.",
    "I lived like a man who wanted to die but who had no courage to do it himself.",
    "My last sunrise. That morning, I was not yet a vampire. And I saw my last sunrise. I remember it completely; yet I do not think I remember any other sunrise before it.",
    "Because no one could in any guise convince me of what I myself knew to be true, that I was damned in my own mind and soul.",
    "That is the crowning evil, that we can even go so far as to love each other, you and I. And who else would show us a particle of love, a particle of compassion or mercy? Who else, knowing us as we know each other, could do anything but destroy us? Yet we can love each other.",
  ];
  
  // Function that takes a list of items, and returns a random item
  const randomItem = Math.floor(Math.random() * phrases.length);

  document.getElementById("random-quote").innerHTML =  phrases[randomItem];


  // Music player code

                          // initiate variables
                          let track_name = document.querySelector(".songtitle");
                 
                          let playpause_btn = document.querySelector(".playpause-track");
                          let next_btn = document.querySelector(".next-track");
                          let prev_btn = document.querySelector(".prev-track");
                   
                          let seek_slider = document.querySelector(".seek_slider");
                          let curr_time = document.querySelector(".current-time");
                          let total_duration = document.querySelector(".total-duration");

                          let prev_trackname = document.querySelector("#prev-trackname");
                          let next_trackname = document.querySelector("#next-trackname");

                   
                          let track_index = 0;
                          let isPlaying = false;
                          let updateTimer;
                          
                          // create new audio element
                          let curr_track = document.getElementById("music");
                          
                          //
                          // DEFINE YOUR SONGS HERE!!!!!
                          // MORE THAN FOUR SONGS CAN BE ADDED!!
                          // JUST ADD ANOTHER BRACKET WITH NAME AND PATH
                          // CATBOX.MOE IS RECOMMENDED FOR UPLOADING MP3 FILES
                          let track_list = [
                              {
                                  name: "annie. - wave to earth",
                                  path: "../songs/annie.-wavetoearth.mp3"
                              },
                              {
                                  name: "Duvet - Bôa",
                                  path: "../songs/Bôa-Duvet(Official Video).mp3"
                              },
                              {
                                  name: "Alone - Doja Cat",
                                  path: "../songs/DojaCat-Alone(Visualizer).mp3"
                              },
                              {
                                  name: "Something About You - Eyedress & Dent May",
                                  path: "../songs/EyedressDentMaySomethingAboutYou.mp3",
                              },
                              {
                                  name: "Room Temperature - Faye Webster",
                                  path: "../songs/FayeWebster-RoomTemperature.mp3",
                              },
                              {
                                  name: "For The First Time - Marc Demarco",
                                  path: "../songs/FortheFirstTime.mp3",
                              },
                              {
                                  name: "Infrunami - Steve Lacy",
                                  path: "../songs/Infrunami.mp3",
                              },
                              {
                                  name: "Fragile - Laufey",
                                  path: "../songs/LaufeyFragile.mp3",
                              },
                              {
                                  name: "Matrimony - Tennis",
                                  path: "../songs/Matrimony.mp3",
                              },
                              {
                                  name: "Sarah (Meet Me in The Sauna) - TV Girl",
                                  path: "../songs/Sarah.mp3",
                              },
                              {
                                  name: "Haunted - Laufey",
                                  path: "../songs/LaufeyHaunted.mp3",
                              },
                              {
                                  name: "Dark Red - Steve Lacy",
                                  path: "../songs/DarkRed.mp3",
                              },
                              {
                                  name: "Often - The Weeknd",
                                  path: "../songs/Often.mp3",
                              },
                              {
                                  name: "Please, Please, Please Let Me Get What I Want - The Smiths",
                                  path: "../songs/PleasePleasePlease.mp3",
                              },
                              {
                                  name: "Helmet - Steve Lacy",
                                  path: "../songs/Helmet.mp3",
                              },
                              {
                                  name: "The Party & After The Party - The Weeknd",
                                  path: "../songs/TheParty.mp3",
                              },
                              {
                                  name: "seasons - wave to earth",
                                  path: "../songs/seasons.mp3",
                              },
                              {
                                  name: "Lovers Rock - TV Girl",
                                  path: "../songs/LoversRock.mp3",
                              },
                              
                              
                          ];
                          //
                          //
                          //
                          //
                          //
                   
                          function loadTrack(track_index) {
                              clearInterval(updateTimer);
                              resetValues();
                   
                              // load a new track
                              curr_track.src = track_list[track_index].path;
                              curr_track.volume = 0.05;
                              curr_track.load();
                              
                              // update details of the track
                              track_name.textContent = "playing " + (track_index + 1) + " of " + track_list.length + ": " + track_list[track_index].name;
                   
                              // set an interval of 1000 milliseconds for updating the seek slider
                              updateTimer = setInterval(seekUpdate, 1000);
                              
                              // move to the next track if the current one finishes playing 
                              curr_track.addEventListener("ended", nextTrack);
                          }
                   
                          // reset values
                          function resetValues() {
                              curr_time.textContent = "0:00";
                              total_duration.textContent = "0:00";
                              seek_slider.value = 0;
                          }
                   
                          // checks if song is playing
                          function playpauseTrack() {
                              if (!isPlaying) playTrack();
                              else pauseTrack();
                          }
                   
                          // plays track when play button is pressed
                          function playTrack() {
                              curr_track.play();
                              isPlaying = true;
                              
                              // replace icon with the pause icon
                              playpause_btn.innerHTML = '<i class="material-icons">pause_circle</i>';
                          }
                   
                          // pauses track when pause button is pressed
                          function pauseTrack() {
                              curr_track.pause();
                              isPlaying = false;
                              
                              // replace icon with the play icon
                              playpause_btn.innerHTML = '<i class="material-icons">play_circle</i>';
                          }
                   
                          // moves to the next track (slightly modded by the owner of the site to include prev and next song names)
                          function nextTrack() {
                              if (track_index + 2 == track_list.length) {
                                track_index += 1;
                                prev_trackname.innerHTML = "previous: " + track_list[track_index-1].name;
                                next_trackname.innerHTML = "next: " + track_list[0].name;                              
                              } else if (track_index < track_list.length - 1) {
                                track_index += 1;
                                prev_trackname.innerHTML = "previous: " + track_list[track_index-1].name;
                                next_trackname.innerHTML = "next: " + track_list[track_index+1].name;
                              } else {
                                track_index = 0
                                prev_trackname.innerHTML = "previous: " + track_list[track_list.length-1].name;
                                next_trackname.innerHTML = "next: " + track_list[track_index+1].name;
                              };
                              loadTrack(track_index);
                              playTrack();
                              
                          }
                   
                          // moves to the previous track
                          function prevTrack() {
                              if (track_index - 2 == -1) {
                                track_index -= 1;
                                prev_trackname.innerHTML = "previous: " + track_list[track_list.length-1].name;
                                next_trackname.innerHTML = "next: " + track_list[track_index+1].name; 
                              } else if (track_index > 0) {
                                  track_index -= 1;
                                  prev_trackname.innerHTML = "previous: " + track_list[track_index-1].name;
                                  next_trackname.innerHTML = "next: " + track_list[track_index+1].name;
                              } else {
                                track_index = track_list.length - 1
                                prev_trackname.innerHTML = "previous: " + track_list[track_index-1].name;
                                next_trackname.innerHTML = "next: " + track_list[0].name;
                              };
                              loadTrack(track_index);
                              playTrack();
                          }
                   
                          // seeker slider
                          function seekTo() {
                              seekto = curr_track.duration * (seek_slider.value / 100);
                              curr_track.currentTime = seekto;
                          }
                   
                          function seekUpdate() {
                              let seekPosition = 0;
                              
                              // check if the current track duration is a legible number
                              if (!isNaN(curr_track.duration)) {
                                  seekPosition = curr_track.currentTime * (100 / curr_track.duration);
                                  seek_slider.value = seekPosition;
                                  
                              // calculate the time left and the total duration
                              let currentMinutes = Math.floor(curr_track.currentTime / 60);
                              let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
                              let durationMinutes = Math.floor(curr_track.duration / 60);
                              let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
                                  
                              // adding a zero to the single digit time values
                              if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
                              if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
                              if (currentMinutes < 10) { currentMinutes = currentMinutes; }
                              if (durationMinutes < 10) { durationMinutes = durationMinutes; }
                   
                              curr_time.textContent = currentMinutes + ":" + currentSeconds;
                              total_duration.textContent = durationMinutes + ":" + durationSeconds;
                            }
                          }
                          
                          // load the first track in the tracklist
                          loadTrack(track_index);