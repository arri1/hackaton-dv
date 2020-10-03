const { Generator }= require('@paljs/generator')
new Generator('sdl', {javaScript:true,models:['OrderStatus'],output:'./newGraphql'}).run()
