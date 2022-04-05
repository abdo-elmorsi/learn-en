// export const HOME = "/";

import Home from "../pages";
import Basics from "../pages/Grammar/Basics";
import Tenses from "../pages/Grammar/Tenses";

import IdiomsExpressions from "../pages/Vocabulary/IdiomsExpressions";
import Prepositions from "../pages/Vocabulary/Prepositions";
import Collocations from "../pages/Vocabulary/Collocations";
import PhrasalVerbs from "../pages/Vocabulary/PhrasalVerbs";

import CollocationsAdmin from "../pages/Admin/Collocations";
import PhrasalVerbsAdmin from "../pages/Admin/PhrasalVerbs";

// ************************    AdminRouts      ************************
export const UsersRouts = [
    {
        route: "/",
        element: <Home />,
    },
    {
        route: "g_basics",
        element: <Basics />,
    },
    {
        route: "g_tenses",
        element: <Tenses />,
    },
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
