import { Editor } from '@tinymce/tinymce-react'
import React from 'react'
const Tinymce = () => {
    return (
        <>
            <Editor
                apiKey="4i0p55sb1m4fhrp0y07qkm9ejyei5jjzvjdniyownfx6t2lu"
                name="message"
                value={data.message}
                init={{
                    height: 300,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
                onEditorChange={(content) => setData('message', content)}
            />
        </>
    )
}

export default Tinymce