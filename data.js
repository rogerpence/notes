const data = [{
        title: "Intro",
        text: [
            "Thank you",
            "How to give new life to your business critical IBM i RPG applications on .NET",
            "Motivations and needs",
            "Considerations and recommendations"
        ]
    },
    {
        title: "Don't jump to conclusions",
        text: [
            "Migration polarizing topic",
            "SPACEBAR",
            "Not about eliminating IBM i",
            "Rather supplementing IBM i",
            "SPACEBAR",
            "Giving your RPG a new home where it can be dramatically and easly extended",
            "But also let the IBM i continue to do what it does so well no"
        ]
    },
    {
        title: "IBM i decision makers today face many challenges",
        text: []
    },
    {
        title: "These changes include",
        text: [
            "RPG applications need to do more modern tasks",
            "Apps grew in simpler times",
            "Integrate with more varied hardware",
            "Better web services and web sites",
            "Mobile apps",
            "Integrate with other DB platforms--mySQL, PostgreSQL, ORACLE, NOSQL...",
            "PAUSE",
            "Users, managment and business partners still have greens-screen fatigue",
            "Many newly-appointed IT directors aren't familiar with IBM i",
            "PAUSE",
            "RPG talent is getting hard to find",
            "Attracting younger programmers to RPG is challenging",
            "PAUSE",
            "RPG apps are rarely documented well",
            "Programmers who understand them best are nearing retirement"
        ]
    },
    {
        title: "Deeply depend on apps",
        text: [
            "2020 IBM i Midrange Markplace Survey says 74% have home-brewed RPG apps",
            "In nearly every case... bedrock applications created by RPG teams decades ago",
            "Started simple but quickly grew into pervasive monolith that governs most, if not all, aspects of the business",
            "Decades later, business deeply depends on these apps",
            "ensure the delivery of unique business value to customers and business partners",
            "bugs, features, work-arounds... are lcked in heads of programmmers... full time beach chairs",
            "these apps aren't documented and no on else"
        ]
    },
    {
        title: "Most RPG programmers retiring",
        text: [
            "Perhaps the largest problem decision-makers face is that RPG programmers are starting to retire",
            "Most are rapidly approaching retirement age",
            "very bad news for businesses with RPG applications.",
            "businesses depend on their RPG programmers to maintain and enhance their RPG applications.",
            "Their business depends deeply on these RPG programs. With RPG programmers, it will be very challenging to maintain that RPG. Our customers and prospects are very concerned about this."
        ]
    },
    {
        title: "This is RPG's new reality",
        text: [
            "pundits - RPG demise for years",
            "Like COBOL, RPG will be with us for years",
            "Pundits were wrong, RPG isn't going away",
            "But RPG programmers are",
            "Consider the plight of New Jersey in the US in April 2020.",
            "Couldn't print unemployment benefit checks because its COBOL application broke.",
            "The state didn't have any COBOL programmers available to fix the application. A similar issue also happened in Oklahoma.",
            "RPG and COBOL were both introduced in 1959.",
            "RPG shops will soon have simliar problems."
        ]
    },
    {
        title: "8. It's a well-founded concern. ",
        text: [
            "By 2030 the average RPG programmer will be 70-80 years old",
            "Do the math.. the AS/400 was introduced in 1988",
            "1950, 38, 80...1960 28 70... 1970 18 60",
            "it hardly matters what year they were born, by 2030, most will be retired"
        ]
    },
    {
        title: "9. Beyond RPG programmers, other reasons to migrate",
        text: [
            "A 2019 United States Office of Accountability report says 80% of it budgets are kept keeping systems running",
            "similary, IBM customers report spending too time perpetuating old solutions",
            "and not enough time innovating new ones.",
            "The need for innovation is perhaps the other primary reason to migrate",
            "PAUSE",
            "The cloud is getting very real for many customers. Many customers desire to move operations to the cloud (or at least a hybrid cloud). Although there are finally vendors that provide PaaS IBM i cloud services, there is still a bespoke quality about IBM i-based cloud solutions and they are premium-priced.",
            "Customers also site the need for more and better Web services and websites, integration with unique devices (we recently had a customer who needed to hook Raspberry Pi device output to its system of record. That was doable on the IBM i but frustrating and time-consuming). ",
            "Customers also continue to express frustration with the IBM i's green screen user interface. "
        ]
    },
    {
        title: "10. How do you avoid your RPG crisis without your RPG programmers",
        text: [
            "",
            "",
        ]
    },
    {
        title: "11. You business can't survive without its RPG applications",
        text: [
            "You can’t rewrite your RPG applications with any rational dollar budget and reasonable timeline. It’s not unusual for RPG applications to have more than 1m LOC. (we’ve seen them with up to 12m LOC!) Plug in a number of tested, documented number of LOC a good programmer can write in a day and do the math on a 1m LOC project. 200 LOC per day is probably woefully optimistic, but even that with number it takes 17 person years to write a million lines of code. (And the 200 LOC number is probably at least 4x too high!)",
            "You can’t replace them with canned packages because they have been tweaked and tuned for decades to do exactly what your business needs. Your businesses every critical workflow for delivering its unique business value is encapsulated in special-case code. It would be just as expensive to make SalesForce, SAP, or Oracle CRM do what your business needs as it would to rewrite the application from scratch (and probably take as long!). ",
            "Pondering business survival without your line-of-business RPG applications is a stressful, worrisome exercise. There is no solution in sight! "
        ]
    },
    {
        title: "12. Should you rewrite",
        text: [
            "beyond time and dollar budgets, related to rewriting your app",
            "Good luck getting full team consent on a rewrite",
            "PC programmers always want to rewrite",
            "always want to play with the latest and greatest framework",
            "also very unrealistic with how long it takes to rewrite",
            "RPG programmers never want to rewrite",
            "They can't be objective—you're talking about replacing their life's work",
            "You are also threatening their comfort zone",
        ]
    },
    {
        title: "13. Leverage your RPG to avoid your RPG crisis",
        text: [
            "",
            "",
            "",
            "",
            "",
            "",
        ]
    },
    {
        title: "14. A migration leverages the most important thing your business owns: your RPG source code",
        text: [
            "Your RPG source code is the single source of truth for how your business delivers its unique business value. There may be parts of your RPG application that can be removed and delegated to off-the-shelf solutions. General purpose tasks like general ledger and accounts payable may be good examples of what can replaced with packages. However, there is a substantial portion of your RPG application that can’t easily be replaced. And it’s the part responsible for persisting your businesses unique value to your customers.",
            "To ensure ongoing business persistence, it’s important that you use this RPG for all it’s worth.  It’s what drives the possibility of persisting the unique parts of the application with a from-the-ground-up rewrite or trying to bend and shape your business to the demands of canned software. ",
            "The IBM i had its 31th birthday in July 2019. It is, by any technical yardstick, an old computer. Does it have life left in it. Almost certainly yes, but another challenge you face is finding the talent necessary to keep your legacy RPG application running for another 20 or 30 years. ",
        ]
    },
    {
        title: "15. Steps to migration success",
        text: [
            "Out experience has taught us:",
            "a detailed migration plan is critical. The Monarch suite has many complex migration agents and other components that deal with the transformation of RPG to C#, but it also has sophisticated analytical  components that help us establish a solid migration plan.",
            "It’s important to make a migrated application  work correctly before it’s made to work faster or better. We want to get to A/B tests that show the migrated application works before we refactor or otherwise make major source code changes",
            "We aim to keep fingers out of the code during migration as much as possible. Have good tooling that converts as much of the code as possible and minimizes remediation by hand.",
            "Migrate, test, and deliver in well-established increments—you can' do it all at once!"
        ]
    },
    {
        title: "16. The deliverable",
        text: [
            "",
            "",
            "",
            "",
            "",
            "",
        ]
    },
    {
        title: "17. Typical migration source and targets",
        text: [
            "",
            "",
            "",
            "",
            "",
            "",
        ]
    },
    {
        title: "xx.",
        text: [
            "",
            "",
            "",
            "",
            "",
            "",
        ]
    },
    {
        title: "xx.",
        text: [
            "",
            "",
            "",
            "",
            "",
            "",
        ]
    },
    {
        title: "xx.",
        text: [
            "",
            "",
            "",
            "",
            "",
            "",
        ]
    },
    {
        title: "xx.",
        text: [
            "",
            "",
            "",
            "",
            "",
            "",
        ]
    },
    {
        title: "xx.",
        text: [
            "",
            "",
            "",
            "",
            "",
            "",
        ]
    },
    {
        title: "xx.",
        text: [
            "",
            "",
            "",
            "",
            "",
            "",
        ]
    },
    {
        title: "xx.",
        text: [
            "",
            "",
            "",
            "",
            "",
            "",
        ]
    },

]