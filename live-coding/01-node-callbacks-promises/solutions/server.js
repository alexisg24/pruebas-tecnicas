import express from 'express'
 let data = []
 const app = express()
 app.disable('x-powered-by')
 app.set('PORT', 3000)
 app.use(express.urlencoded({extended: true}))
 app.use(express.json())

 app.get('/', (req, res) =>{
     res.json({items: data})
 })

 app.post('/', (req, res) =>{
    const { content } = req.body
    if(data.length === 0){
        const newId = data.length + 1
        data.push({id: newId, content})
        return res.json({ok: true, data: {id: newId, content}})
    }else{
        const newId = data[data.length - 1].id + 1
        data.push({id: newId, content})
        return res.json({ok: true, data: {id: newId, content}})
    }
 })

 app.patch('/:id', (req, res) =>{
    const {id} = req.params
    const {content} = req.body

    const index = data.findIndex(item => item.id === id)
    data[index] = {id, content}
    res.json({ok: true, data: data[index]})

 })

 app.delete('/:id', (req, res) =>{
    const {id} = req.params
    const index = data.findIndex(item => item.id == id)
    console.log(index)
    console.log([...data.slice(0, index), ...data.slice(index+1)])
    data = [...data.slice(0, index), ...data.slice(index+1)]
    res.json({ok: true})
 })

 app.listen(app.get('PORT'), () =>{
     console.log('listening')
 })
