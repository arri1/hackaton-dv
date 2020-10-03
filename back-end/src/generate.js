const { Generator }= require('@paljs/generator')
new Generator('sdl', {javaScript:true,models:['Business'],output:'./newGraphql'}).run()
