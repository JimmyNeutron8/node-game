// Get IO
const socket = io();

// Get the game canvas stuff
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
