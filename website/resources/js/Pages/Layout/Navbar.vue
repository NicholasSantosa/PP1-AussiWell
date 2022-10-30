<template>
    <div class="daisy-navbar bg-base-100 sticky top-0 border-b-2 border-b-base-200 z-50">
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
                    <li><Link href="/dashboard">Dashboard</Link></li>
                </ul>
            </div>
        </div>
        <div class="daisy-navbar-center">
            <Link href="/" class="daisy-btn daisy-btn-ghost normal-case text-xl">Environmint</Link>
        </div>
        <div class="daisy-navbar-end">
            
        <div class="daisy-dropdown daisy-dropdown-end">
            <label tabindex="0" class="daisy-btn daisy-btn-ghost daisy-btn-circle m-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
            </label>
            <div tabindex="0" class="daisy-dropdown-content daisy-menu shadow text-primary-content rounded-box w-52">        
                <div class="daisy-alert daisy-alert-success shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>The extension is now available for <a href="/downloads/Environmint-chrome.zip" class="daisy-link">download</a> ⚡</span>
                    </div>
                </div>

            </div>
        </div>
            
            <!-- <button class="daisy-btn daisy-btn-ghost daisy-btn-circle">
                <div class="daisy-indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span class="daisy-badge daisy-badge-xs daisy-badge-primary daisy-indicator-item"></span>
                </div>
            </button> -->
        </div>
    </div>
</template>