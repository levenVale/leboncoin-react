import React from "react";

import "../components/css/sign-in.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="sign-in">
      <ul className="sign-in-list">
        <li>
          <h4>Connexion</h4>
        </li>
        <li>
          <hr />
        </li>
        <li>Adresse email</li>
        <li>
          <input type="email" name="email" />
        </li>
        <li>Mot de passe</li>
        <li>
          <input type="password" name="password" />
        </li>
        <li>
          <button>Se connecter</button>
        </li>
        <li>
          <p>Vous n'avez pas de compte ?</p>
        </li>
        <li>
          <Link to="/user/sign_up">
            <button>Créer un compte</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SignIn;
