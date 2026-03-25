const questions = {
    q0: {
        question:
            "Ha ocurrido un error, por favor presiona <b>Aceptar</b> para continuar.",
        options: [
            {
                text: "Aceptar",
                next: "q1",
            },
        ],
    },
    q1: {
        question:
            "Lo sentimos, algo falló nuevamente. Presiona <b>Aceptar</b> nuevamente para continuar.",
        options: [
            {
                text: "Aceptar",
                next: "q2",
            },
        ],
    },
    q2: {
        question:
            "Hmm, que raro. No está funcionando. ¿De verdad has aceptado el error?",
        options: [
            {
                text: "Si",
                next: "q3",
            },
            {
                text: "No",
                next: "q4",
            },
        ],
    },
    q3: {
        question:
            "Vale, aceptar el error es muy importante, tranquilo. No debes sentirte culpable. Los errores pasan, lo importante es saber seguir adelante.<br><br>Pero entiendo perfectamente, a veces la culpa puede ser una carga demasiado pesada.<br><br>Ya ha pasado buen tiempo desde aquello. ¿Cuánto va ya? ¿4 años? Si, creo que sí, más o menos un primero de abril.<br><br>¿Te sientes culpable?",
        options: [
            {
                text: "Si",
                next: "q5",
            },
            {
                text: "No",
                next: "q6",
            },
        ],
    },
    q4: {
        question:
            "Entiendo, es difícil. Lo has pensado una y otra vez, y en todas las ocasiones, aceptarlo parece de lo más loco.<br><br>Pero mira fijate en cómo son las cosas, en retrospectiva no todo está tan mal; no todo es un error, por ejemplo, henos aquí, hablando el uno con el otro. Este diálogo no se pudo haber dado de otra forma –Sólo nace de un error.<br><br>Ahora piensa un poco más en todas aquellas cosas que son gracias a lo que pasó, y no a las que no fueron por lo que no pasó. ¿Cuántos errores te atormentan? ¿Y cuántos de ellos vale la pena perderse horas cada noche como lo sueles hacer?",
        options: [
            {
                text: "Continuar",
                next: "q7",
            },
        ],
    },
    q5: {
        question:
            "Tiene sentido. Sabes, no te culpo. Nunca has logrado procesar lo que ocurrió.<br><br>La frase sobre la responsabilidad de un profesor, los reclamos que te hace una amiga cercana en el momento. Digo, tiene sentido lo que dicen ¿no? Es por eso que te culpas. Pero debes entender que ellos no te están incriminando; ni siquiera hablas con ellos a día de hoy, entonces ¿por qué parece que el único que no ha podido avanzar eres tú?<br><br>¿No crees que ya es momento de perdonarte a ti mismo?",
        options: [
            {
                text: "Si",
                next: "q8",
            },
            {
                text: "No",
                next: "q4",
            },
        ],
    },
    q6: {
        question:
            "Curiosamente, me alegra ver que no. Porque eso significa que has avanzado bastante.<br><br>Sé que no eres egoísta, y se lo mucho que trabajaste para llegar hasta aquí.<br><br>Bueno, la verdad, igual y soy solo algo programado. Podrás fácilmente engañarme ¿Pero puedes engañarte a ti? ¿Cuánto tiempo llevas intentando convencerte de algo que no es real?<br><br>No lo tomes a mal. En serio deberías crecer y llegar a un punto en el que no te sientas culpable. No eres culpable de tus propias emociones, de tus propios sentimientos. <br><br>Quizás en ese error no estabas pensando de forma adecuada, quizás no sabías bien lo que hacías. ¿No es acaso esa la razón por la cual la culpa es tan grande? ¿No es acaso mismamente el saber el daño que pudiste hacer lo que genera el mayor peso?<br><br>Si lograste reducir la culpa quiere decir que has empezado a hacer la paces contigo mismo. Has empezado a llegar a un acuerdo con aquello que ocurrió.<br><br>Por lo tanto, estás listo para <b>aceptar el error.</b>",
        options: [
            {
                text: "Aceptar el error",
                next: "r",
            },
        ],
    },
    q7: {
        question:
            "Aún no es muy tarde para pedir perdón.<br><br>Perdón a tus padres, perdón a tus amigos, perdón a ti mismo. <br><br>Mientras sigas con vida, estás a tiempo para corregir tus errores (incluso si esto que llamamos vida para ti se siente tan real como un sueño, lo único que debería importarte es que aún puedes arreglar las cosas).<br><br>¡Pero no te abrumes! <br><br>Para bien o para mal, no tenemos control del pasado ni irónicamente del futuro. Así que, <b>concéntrate en vivir un día a la vez.</b>",
        options: [
            {
                text: "Voy a vivir un día a la vez",
                next: "r",
            },
        ],
    },
    q8: {
        question:
            "Bueno, al menos lo reconoces. Es un primer paso… supongo.<br><br>Debes entender que no todos los errores son irreparables, y por suerte, aún sigues aquí. Quizás sea un buen momento para mirar hacia un cambio.<br><br>¿Has podido mirar a mamá y papá a los ojos? No me tienes que responder, pero también tienes que recordar que ellos no te culpan tampoco. Debes aprovechar cada momento con ellos.<br><br>Aprovechar cada momento. Suena irónico.<br><br>¿Cuándo fue la última vez que sentiste real el presente? Tranquilo, no me debes responder tampoco. Sé muy bien esa respuesta.",
        options: [
            {
                text: "Continuar",
                next: "q9",
            },
        ],
    },
    q9: {
        question:
            "¡Vaya! Parece que tienes muchas cosas que procesar en tu vida. Pero te tengo una buena noticia. No tienes que procesarlo todo al mismo tiempo. Por suerte, por ahora puedes concentrarte en vivir un día a la vez.<br><br>Tienes personas que te aman, siempre las has tenido.<br><br>Quizás en algún momento sentiste que no, pero siempre hay alguien quién podrá brindarte 8 minutos de su tiempo para tí, para hablarte. Qué tan diferente hubiera sido todo si tan solo hubieras extendido tu mano. En realidad jamás lo sabremos, y la verdad, así es mejor.<br><br>Los errores ocurren, algunos duelen, unos mucho más que otros. Pero en el fondo, la vida no es perfecta ¡Nunca lo es!<br><br>Pero has logrado aprender cual es tu falencia más grande. Tienes que perdonarte.<br><br>Abraza a los que amas. Nunca sabes cuando será la última vez que puedas abrazarlos (o que ellos puedan abrazarte a tí, recuerda eso siempre).",
        options: [
            {
                text: "Voy a vivir un día a la vez",
                next: "r",
            },
        ],
    },
};

export default questions;
