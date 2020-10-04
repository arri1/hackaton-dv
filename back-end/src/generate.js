const { Generator }= require('@paljs/generator')
new Generator('sdl', {javaScript:true,models:['Order'],output:'./temp'}).run()
