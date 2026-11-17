import Angular from '@/components/icons/Angular.astro';
import Api from '@/components/icons/Api.astro';
import Azure from '@/components/icons/Azure.astro';
import Bootstrap from '@/components/icons/Bootstrap.astro';
import Cloud from '@/components/icons/Cloud.astro';
import Cloudflare from '@/components/icons/Cloudflare.astro';
import CSharp from '@/components/icons/CSharp.astro';
import Database from '@/components/icons/Database.astro';
import DotNet from '@/components/icons/DotNet.astro';
import Docker from '@/components/icons/Docker.astro';
import Firebase from '@/components/icons/Firebase.astro';
import Go from '@/components/icons/Go.astro';
import Html from '@/components/icons/Html.astro';
import JavaScript from '@/components/icons/JavaScript.astro';
import Kotlin from '@/components/icons/Kotlin.astro';
import Laravel from '@/components/icons/Laravel.astro';
import MySQL from '@/components/icons/MySQL.astro';
import PHP from '@/components/icons/PHP.astro';
import Python from '@/components/icons/Python.astro';
import React from '@/components/icons/React.astro';
import Sass from '@/components/icons/Sass.astro';
import Server from '@/components/icons/Server.astro';
import SQL from '@/components/icons/SQL.astro';
import Tailwind from '@/components/icons/Tailwind.astro';
import TypeScript from '@/components/icons/TypeScript.astro';
import Vue from '@/components/icons/Vue.astro';

export interface Tag {
    name: string
    icon?: typeof Angular
}

export const TAGS = {
    CSharp: { name: 'C#', icon: CSharp },
    TypeScript: { name: 'TypeScript', icon: TypeScript },
    JavaScript: { name: 'JavaScript', icon: JavaScript },
    PHP: { name: 'PHP', icon: PHP },
    Python: { name: 'Python', icon: Python },
    Kotlin: { name: 'Kotlin', icon: Kotlin },
    Go: { name: 'Go', icon: Go },
    SQL: { name: 'SQL', icon: SQL },
    Razor: { name: 'Razor' },
    HTML: { name: 'HTML', icon: Html },
    Angular: { name: 'Angular', icon: Angular },
    React: { name: 'React', icon: React },
    Vue: { name: 'Vue', icon: Vue },
    Tailwind: { name: 'Tailwind CSS', icon: Tailwind },
    Sass: { name: 'SASS', icon: Sass },
    Bootstrap: { name: 'Bootstrap', icon: Bootstrap },
    DotNet: { name: '.NET', icon: DotNet },
    AspNet: { name: 'ASP.NET', icon: DotNet },
    Laravel: { name: 'Laravel', icon: Laravel },
    ApiRest: { name: 'APIs REST', icon: Api },
    SQLServer: { name: 'SQL Server', icon: Database },
    PostgreSQL: { name: 'PostgreSQL', icon: Database },
    MySQL: { name: 'MySQL', icon: MySQL },
    Firebase: { name: 'Firebase', icon: Firebase },
    Azure: { name: 'Azure', icon: Azure },
    IIS: { name: 'IIS', icon: Server },
    Docker: { name: 'Docker', icon: Docker },
    GoogleCloudStorage: { name: 'Google Cloud Storage', icon: Cloud },
    Cloudflare: { name: 'Cloudflare', icon: Cloudflare },
    TensorFlow: { name: 'TensorFlow' },
} satisfies Record<string, Tag>
