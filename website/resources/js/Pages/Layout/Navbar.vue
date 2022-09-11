<template>
    <div class="daisy-navbar bg-base-100 sticky top-0 border-b-2 border-b-base-200">
        <div class="daisy-navbar-start">
            <div class="daisy-dropdown">
                <label tabindex="0" class="daisy-btn daisy-btn-ghost daisy-btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </label>
                <ul tabindex="0"
                    class="daisy-menu daisy-menu-compact daisy-dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>How it works</a></li>
                    <li><a>Get started</a></li>
                </ul>
            </div>
        </div>
        <div class="daisy-navbar-center">
            <Link href="/" class="daisy-btn daisy-btn-ghost normal-case text-xl">Environmint</Link>
        </div>
        <div class="daisy-navbar-end">
            <button class="daisy-btn daisy-btn-ghost daisy-btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
            <button class="daisy-btn daisy-btn-ghost daisy-btn-circle">
                <div class="daisy-indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span class="daisy-badge daisy-badge-xs daisy-badge-primary daisy-indicator-item"></span>
                </div>
            </button>
        </div>
    </div>
</template>