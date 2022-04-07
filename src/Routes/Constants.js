import React from "react";
// import Basics from "../pages/Grammar/Basics";
// import PastTense from "../pages/Grammar/past";
// import PastSimple from "../pages/Grammar/past/Simple";
// import PastContinuous from "../pages/Grammar/past/Continuous";
// import PastPerfect from "../pages/Grammar/past/Perfect";
// import IdiomsExpressions from "../pages/Vocabulary/IdiomsExpressions";
// import Prepositions from "../pages/Vocabulary/Prepositions";
// import Collocations from "../pages/Vocabulary/Collocations";
// import PhrasalVerbs from "../pages/Vocabulary/PhrasalVerbs";
// import CollocationsAdmin from "../pages/Admin/Collocations";
// import PhrasalVerbsAdmin from "../pages/Admin/PhrasalVerbs";
// import Home from "../pages"
// import Tenses from "../pages/Grammar/Tenses"

const Home = React.lazy(() => import("../pages"));
// Grammar
const Tenses = React.lazy(() => import("../pages/Grammar/Tenses"));
const Basics = React.lazy(() => import("../pages/Grammar/Basics"));
// -----    Past   -----
const PastTense = React.lazy(() => import("../pages/Grammar/past"));
const PastSimple = React.lazy(() => import("../pages/Grammar/past/Simple"));
const PastContinuous = React.lazy(() => import("../pages/Grammar/past/Continuous"));
const PastPerfect = React.lazy(() => import("../pages/Grammar/past/Perfect"));

//*****    Vocabulary    ***** //
const IdiomsExpressions = React.lazy(() => import("../pages/Vocabulary/IdiomsExpressions"));
const Prepositions = React.lazy(() => import("../pages/Vocabulary/Prepositions"));
const Collocations = React.lazy(() => import("../pages/Vocabulary/Collocations"));
const PhrasalVerbs = React.lazy(() => import("../pages/Vocabulary/PhrasalVerbs"));

//*****    Admin    ***** //
const CollocationsAdmin =  React.lazy(() => import("../pages/Admin/Collocations"));
const PhrasalVerbsAdmin =  React.lazy(() => import("../pages/Admin/PhrasalVerbs"));
// ************************    AdminRouts      ************************
export const UsersRouts = [
    {
        route: "/",
        element: <Home />,
    },
    // Grammar
    {
        route: "g_basics",
        element: <Basics />,
    },
    {
        route: "g_tenses",
        element: <Tenses />,
    },
    {
        route: "g_tenses/past",
        element: <PastTense />,
    },
    // Past
    {
        route: "g_tenses/past/simple",
        element: <PastSimple />,
    },
    {
        route: "g_tenses/past/continuous",
        element: <PastContinuous />,
    },
    {
        route: "g_tenses/past/perfect",
        element: <PastPerfect />,
    },
    // Vocabulary
    {
        route: "idioms",
        element: <IdiomsExpressions />,
    },
    {
        route: "prepositions",
        element: <Prepositions />,
    },
    {
        route: "collocations",
        element: <Collocations />,
    },
    {
        route: "phrasalVerb",
        element: <PhrasalVerbs />,
    },
];

export const AdminRouts = [
    {
        route: "collocations_controls",
        element: <CollocationsAdmin />,
    },
    {
        route: "phrasalVerbs_controls",
        element: <PhrasalVerbsAdmin />,
    },
];
