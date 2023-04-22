import React, {useEffect, useState} from 'react';

const quotes = [
    "I ain’t scared of the fall, I’ve felt the ground before.",
    "Happiness exist when you don’t know a thing.",
    "Good girls go to heaven and bad girls go everywhere.",
    "I don’t want to be a prisioner to who I used to be.",
    "Only losers go to school, I taught myself how to move.",
    "If it ain´t XO, then it gotta go.",
    "These girls born in the 90’s are dangerous.",
    "Look what you’ve done, i’m a motherf**king starboy.",
    "I only met you in my dreams before.",
    "Devil on my lap and a cross on my neck.",
    "I’m staring into the abyss, I’m looking at myself again.",
    "She never need a man, she what a man need.",
    "My flow too sick, Kevin Costner couldn’t touch me.",
    "I choose Vegas if they offer Heaven’s gate.",
    "He’s what you want. I’m what you need.",
    "I don’t care about you, why you worried ‘bout me?",
    "I don’t wanna hurt you but you live for the pain.",
    "All this money and this pain got me heartless.",
    "I love it when your eyes are red. Are you on my cloud yet?",
    "We’re in Hell, it’s disguised as a paradise with flashing lights.",
    "I know he’s still in your brain I’m ‘bout to burn that shit into flames.",
    "I want you cause we´re both insane.",
    "I just wanna see you shine ‘cause I know you are a stargirl.",
    "Tell me how to love, it´s been so long.",
    "Show me your broken heart and all your scars- I’ll take you as you are.",
    "You’re built like a Goddess.",
    "I realized I belong to you. I feel the darkness when away from you.",
    "Wasted times I spent with someone else, she wasn’t even half of you.",
    "When the darkness comes, you’re my light, baby.",
    "I love how you touch, how you feel, how you breath.",
    "Girl, call out my name and i’ll be on my way.",
    "You got me tattooed on your mind.",
    "Got everything I wanted but I’d be nothing without you.",
    "It’s just me and you, they couldn’t see what i see in you.",
    "You make it look like it’s magic ´cause I see nobody but you.",
    "When I make her laugh, swear it cures my depressin’ thoughts.",
    "Let me take the friction from your lips.",
    "Tell me lies, say you’re mine, I’m yours for the night.",
    "Main b**ch outta your league too, ah. Side b**ch outta your league, too, ah.",
    "Wipe the lust from the eyes. I see that you’re not mine",
    "You’ve been here before, remember these sheets?",
    "I wrap my hands around your neck. You love it when i always squeeze.",
    "Thank Lord for the day, woke up with a girl, i don’t even know her name.",
    "You’re my favorite kind of night.",
    "Heaven in her mouth, got a hell of a tongue.",
    "Lust over love is your mindset.",
    "And if you ain’t my n**ga, then your girl single to me.",
    "We are nothing but strangers in bed."
];



function Home(props:any) {
    const [quote, setQuote] = useState('');

    const loadQuote = () =>{
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex])
    }

    useEffect(() => {
        loadQuote()
    }, []);

    return (
        <div className="home-container">
            <div className="typewriter">
                <div>
                    <p>Mariana, {quote}     |F</p>
                    <button className="login__submit" onClick={()=>loadQuote()} >New</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
