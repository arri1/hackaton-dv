import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import fs from 'fs'

const ADD_CARD = gql`
    mutation CreateCard($file: Upload!, $title: String!) {
        createCard(file: $file, data: { title: $title }) {
            title
            icon {
                path
            }
        }
    }
`

function App(ctx) {
    const [file, setFile] = useState(undefined)
    const [title, setTitle] = useState(undefined)
    const [color, setColor] = useState(undefined)
    const [imagePreviewUrl, setImagePreviewUrl] = useState(undefined)

    const [addCard, { data }] = useMutation(ADD_CARD)

    const onSubmit = async (event) => {
        event.preventDefault()
        console.log(file)
        console.log(title)
        addCard({ variables: { file, title } })
    }

    const onImageChange = (event) => {
        let reader = new FileReader()
        let File = event.target.files[0]
        reader.onloadend = () => {
            setFile(File)
            setImagePreviewUrl(reader.result)
        }
        reader.readAsDataURL(File)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <p>Title</p>
                <input
                    required 
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
                <p>File</p>
                <input type={'file'} required  onChange={onImageChange} />
                <div>
                    {imagePreviewUrl ? (
                        <img src={imagePreviewUrl} style={{ height: 300 }} />
                    ) : (
                        <div>Please select an Image for Preview</div>
                    )}
                </div>
                <br />
                <br />
                <input type={'submit'} />
                <button type={'button'} onClick={console.log(data)}>
                    Data output
                </button>
            </form>
            <div></div>
        </div>
    )
}

export default App
