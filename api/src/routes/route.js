const {Router} = require("express")
const router = Router()
const Prompt = require("../Prompt")
const cohere = require("cohere-ai")
cohere.init("rvLGNZgP2Ea6vf2Ld8Zl5JLo1TC4IhIB5Z72c8cW")

const setings = {
    model: 'xlarge',
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 40,
    temperature: 0.7,
    stop_sequences: ['--'],
    return_likelihoods: 'NONE'
}

function errorMsj (error){
    throw error
}

async function traduction (input){

    const prompt =  Prompt(input)
    const response = await cohere.generate({...setings, prompt:prompt})
    return response.body.generations[0].text.replace(/\"/g, "").slice(0, -2).trim()
}

router.post("/",async (req, res)=>{
    const {input} = req.body
    try {
        const lenguaje = await cohere.detectLanguage({texts:[input]})
        console.log(lenguaje.body.results[0].language_code)
        if(lenguaje.body.results[0].language_code != 'es') errorMsj("el idioma requerido es ingles!")
        if(input){
           res.json(await traduction(input))
        }else{
            errorMsj("falta parametro o invalido")
        }
    } catch (error) {
        res.json(error)
    }
    
})

module.exports = router