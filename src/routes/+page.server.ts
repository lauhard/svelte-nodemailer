import type {Config}  from '@sveltejs/kit';
import { render } from 'svelte-email';
import Hello from '$lib/components/Hello.svelte';
import nodemailer from 'nodemailer';
import { GMAIL_KEY } from '$env/static/private';
import type { PageServerLoad } from './$types';

const transporter = nodemailer.createTransport({
	service: 'gmail',

	auth: {
		user: 'lauhard.andreas@gmail.com',
		pass: `${GMAIL_KEY}`
	}
});



const options = {
	from: 'lauhard.andreas@gmail.com',
	to: 'lauhard.andreas@gmail.com',
	subject: 'hello world',
    text: `
    praxis@lisaloof.com
    `,
};

// transporter.sendMail(options);
export const config: Config =  {
    runtime: 'edge'
}
export const load: PageServerLoad = async () => {
    // await transporter.sendMail(options);
    return{
        
    }
};