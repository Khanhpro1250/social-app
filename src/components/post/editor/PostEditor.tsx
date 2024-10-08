'use client'

import { useSession } from '@/app/(main)/providers/SessionProvider'
import { Button } from '@/components/ui/button'
import UserAvatar from '@/components/ui/user-avatar'
import Placeholder from '@tiptap/extension-placeholder'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { submitPost } from './actions'
import './styles.css'
export default function PostEditor() {
    const { user } = useSession();
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bold: false,
                italic: false
            }),
            Placeholder.configure({
                placeholder: "How do you feel ?"
            })
        ]
    })

    const input = editor?.getText({
        blockSeparator: '\n',
    }) || ""
    const onSubmit = async () => {
        await submitPost(input);
        editor?.commands?.clearContent()
    }
    return <div className='flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-sm'>
        <div className='flex gap-5'>
            <UserAvatar className='hidden sm:inline' avatarUrl={user?.avatarUrl} />
            <EditorContent
                editor={editor}
                className='w-full max-h-[20rem] overflow-y-auto bg-background-main-page shadow-sm rounded-2xl px-5 py-3'
            />
        </div>
        <div className='flex justify-end'>
            <Button
                className='min-w-20'
                disabled={!input.trim()}
                onClick={onSubmit}
            >
                Post
            </Button>
        </div>
    </div>
}