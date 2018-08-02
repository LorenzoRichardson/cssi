// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

console.log("Running Click Events Script");

const colors = ['red','pink','orange','yellow','blue'];

let box1 = document.querySelector('#box1');

let box2 = document.querySelector('#box2');

let box3 = document.querySelector('#box3');

let box4 = document.querySelector('#box4');

let box5 = document.querySelector('#box5');

let rect = document.querySelector('#rect');

let box6 = document.querySelector('#box6');

box1.addEventListener('click', changecolor0);
box2.addEventListener('click', changecolor1);
box3.addEventListener('click', changecolor2);
box4.addEventListener('click', changecolor3);
box5.addEventListener('click', changecolor4);

function changecolor0 ()
{
  box1.style.backgroundColor=colors[0];
  box2.style.backgroundColor=colors[0];
  box3.style.backgroundColor=colors[0];
}

function changecolor1 ()
{
  box1.style.backgroundColor=colors[1];
  box2.style.backgroundColor=colors[1];
  box3.style.backgroundColor=colors[1];
}
function changecolor2 ()
{
  box1.style.backgroundColor=colors[2];
  box2.style.backgroundColor=colors[2];
  box3.style.backgroundColor=colors[2];
}
function changecolor3() {

    var background = document.getElementById(id).style.backgroundColor;
    if (background == "rgb(255, 145, 0)") {
        document.getElementById(id).style.backgroundColor = "rgb(26,255,0)";
    } else {
        document.getElementById(id).style.backgroundColor = "rgb(255,145,0)";
    }

}

function changecolor4 ()
{
  box5.style.backgroundColor=colors[4];
}
