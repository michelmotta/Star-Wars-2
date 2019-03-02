<template>
    <div class="tab-pane fade show active" id="characters" role="tabpanel" aria-labelledby="characters-tab">
        <div class="star-wars-icon">
            <img src="images/Master-Joda-icon.png">
        </div>
        <table class="table table-bordered table-dark table-hover">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Height</th>
                    <th scope="col">Peso</th>
                    <th scope="col">Hair</th>
                    <th scope="col">Skin</th>
                    <th scope="col">Eyes</th>
                    <th scope="col">Gender</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(movieCharacter, index) in movieCharactersList" :key="index">
                    <th>{{movieCharacter.name}}</th>
                    <td>{{movieCharacter.height}}</td>
                    <td>{{movieCharacter.mass}}</td>
                    <td>{{movieCharacter.hair_color}}</td>
                    <th>{{movieCharacter.skin_color}}</th>
                    <td>{{movieCharacter.eye_color}}</td>
                    <td>{{movieCharacter.gender}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ModalChildCharacters'
}
</script>