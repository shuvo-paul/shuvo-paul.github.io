<script>
    // @ts-ignore
    import Github from '$lib/icons/github.svg?component';
    // @ts-ignore
    import LinkedIn from '$lib/icons/linkedin.svg?component';
    // @ts-ignore
    import Twitter from '$lib/icons/twitter.svg?component';
</script>
<footer class="text-center mt-24 md:mt-28 lg:mt-44 mb-4 md:pb-6" id="contact">
    <div class="container">
        <div class=" max-w-xl mx-auto">
            <h2 class="mb-3 text-2xl md:text-4xl">Get In Touch</h2>
            <p>Whether you have a project in mind or simply want to discuss your ideas, I'm always eager to connect and collaborate. Let's work together to bring your vision to life!</p>
            <a class="mt-9 inline-block mx-auto border border-primary text-primary py-3 px-5 rounded" href="mailto:shuvopaul@yahoo.com">
                Say Hello
            </a>
        </div>
        
        <ul class="social">
            <li class='mx-4 lg:my-4'>
                <a class="" href="//github.com/shuvo-paul" target="_blank" rel="noreferrer">
                    <Github class="icon" />
                </a>
            </li>
            <li class='mx-4 lg:my-4'>
                <a class="" href="//linkedin.com/in/shuvopaul396" target="_blank" rel="noreferrer">
                    <LinkedIn class="icon"/>
                </a>
            </li>
            <li class='mx-4 lg:my-4'>
                <a class="" href="//twitter.com/shuvopaul396" target="_blank" rel="noreferrer">
                    <Twitter class="icon"/>
                </a>
            </li>
        </ul>

        <div class="email-address">
            <div class="line"></div>
            <a class='font-light' href="mailto:shuvopaul@yahoo.com">shuvopaul@yahoo.com</a>
        </div>

        <div class="text-center text-xs mt-28 lg:mt-40">
            Inspiration: <a class=' hover:text-primary-500' href="https://brittanychiang.com/">Brittany Chiang</a>
        </div>
    </div>
</footer>

<style lang="postcss">
    .social {
        @apply list-none mt-24 mb-6 lg:fixed left-0 top-1/2 lg:-translate-y-full flex justify-center lg:flex-col after:content-[''];
    }

    .social::after {
        @apply lg:w-[28px] lg:h-[100px] lg:border-t lg:border-r lg:absolute lg:bottom-full lg:left-0 border-primary;
    }

    .email-address {
        @apply text-center lg:fixed lg:-right-12 lg:rotate-90 lg:transform lg:bottom-[30%];
    }

    .email-address .line {
        @apply absolute w-[calc(100%+2rem)] h-[20px] border-t border-r border-l bottom-[12px] left-1/2 transform -translate-x-1/2 hidden lg:block border-primary after:content-[''];
    }

    .email-address .line::after {
        @apply h-[50px] w-[1px] absolute transform -translate-y-full bg-primary;
    }
</style>