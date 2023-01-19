import React, { useEffect, useState } from "react";

const ContactPage = () => {
    return(
        <div class="h-screen px-40 py-20 bg-flame alig">
            <div class="text-40 font-bold tracking-wide pb-10 text-center text-floral-white">
                Get in touch to grab a beer/coffee?
            </div>
            <form class="flex flex-col items-center justify-center">
                <div class="p-2">
                    <label class="text-16 tracking-wide leading-5 font-bold px-5" for="name">Name:</label>
                    <input class="bg-flame border p-2 rounded focus:border-none" type="text" id="name" name="name" />
                </div>
                <div class="p-2">
                    <label class="text-16 tracking-wide leading-5 font-bold px-5" for="email">Email:</label>
                    <input class="bg-flame border p-2 rounded" type="text" id="email" name="email" />
                </div>
                <div class="flex flex-col">
                    <label class="text-16 tracking-wide leading-5 font-bold p-5" for="visitorThought">What are your thoughts?</label>
                    <textarea class="bg-flame border p-5 rounded" id="visitorThought" name="visitorThought" rows="4" cols="50"/>
                </div>
                <div class="p-2">
                    <label class="text-16 tracking-wide leading-5 font-bold px-5" for="email">We are meeting for:</label>
                    <select class="bg-flame" id="cars">
                        <option class="text-12 tracking-wide leading-5 font-bold px-5" value="beer">Beer</option>
                        <option class="text-12 tracking-wide leading-5 font-bold px-5" value="coffee">Coffee</option>
                    </select>
                </div>
                <input class="cursor-pointer" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ContactPage;