'use client'
import React, { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Gallery } from "../components/gallery";
import { Testimonials } from "../components/testimonials";
import { Team } from "../components/Team";
import { Contact } from "../components/contact";
import JsonData from "../../data/data.json";
import styles from "./page.module.css";

interface LandingPageData {
    Header: {
        title: string;
        paragraph: string;
    };
    About: {
        paragraph: string;
        Why: string[];
        Why2: string[];
    };
    Gallery: { title: string; largeImage: string; smallImage: string }[];
    Services: { icon: string; name: string; text: string }[];
    Testimonials: { img: string; text: string; name: string }[];
    Team: { img: string; name: string; job: string }[];
    Contact: {
        address: string;
        phone: string;
        email: string;
        facebook: string;
        twitter: string;
        youtube: string;
    };
    Features: { icon: string; title: string; text: string }[];
}

export default function Home() {
    const [landingPageData, setLandingPageData] = useState<LandingPageData | null>(null);

    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    if (!landingPageData) {
        // Handle the case where landingPageData is still null
        return null; // or a loading state, or any other fallback
    }

    return (
        <main className={styles.main}>
            <Navigation />
            <Header data={landingPageData.Header} />
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Gallery data={landingPageData.Gallery} />
            <Testimonials data={landingPageData.Testimonials} />
            <Team data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} />
        </main>
    );
}
