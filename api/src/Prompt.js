const Prompt = (input) => {

    const prompt = ` gir
    
    only translates from spanish to english.
    --  
    leter: "uno"
    response: "One." 
    --  
    leter: "cuatro"
    response: "Four." 
    --  
    leter: "hola"
    response: "Hello." 
    --   
    leter: "hola"
    response: "Hello." 
    --   
    leter: "hola"
    response: "Hello." 
    --  
    leter: "carro"
    response: "Car." 
    --  
    leter: "solo uno"
    response: "Only one." 
    --  
    leter: "dos o cuatro"
    response: "Two or four." 
    -- 
    --  
    leter: "quien te creo?"
    response: "who believe you?." 
    --  
    leter: "tu puedes?"
    response: "You can?" 
    --  
    leter: "tu puedes pensar?"
    response: "You can think?" 
    --  
    leter: "eres inteligencia artificial?"
    response: "are you artificial intelligence?" 
    --  
    leter: "puedes tocar el piano"
    response: "you can play the piano." 
    --  
    leter: "puedes comer mas"
    response: "you can eat more." 
    --  
    --
    leter: "hola mi nombre es juan"
    response: "Hello my name is juan." 
    --  
    leter: "mi color preferido es rojo"
    response: "My favorite color is red." 
    --  
    leter: "cuantos años tienes?"
    response: "How old are you?" 
    --  
    leter: "Como te llamas?"
    response: "What is your name?" 
    --  
    leter: "como te llamas maria?"
    response: "What is your maria?"  
    --  
    leter: "que quieres comer pedro?"
    response: "What do you want to eat pedro?" 
    --  
    leter: "hola me gustaria que sea carolina la persona que me atienda por favor."
    response: "Hello, I would like Carolina to be the person who will attend me, please."  
    --      
    leter: "hola de donde eres?"
    response: "Hello, where are you from?"  
    --
    leter: "como estas?"
    response: "How are you?"  
    --
    leter: "quien eres?"
    response: "Who are you?"  
    --
    leter: "hola me gustaria que sea carolina la persona que me atienda por favor."
    response: "Hello, I would like Carolina to be the person who will attend me, please."  
    --
    leter: ${input}
    response:`
    return prompt
}


module.exports = Prompt