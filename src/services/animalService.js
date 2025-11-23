// simples serviço para gerenciar animais no localStorage
const STORAGE_KEY = "animais_zoo";

export function getAllAnimais() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Erro ao ler localStorage", err);
    return [];
  }
}

export function saveAnimal(animal) {
  const lista = getAllAnimais();

  // Atualiza se já existir (edição)
  if (animal.id) {
    const idx = lista.findIndex((a) => a.id === animal.id);
    if (idx >= 0) {
      lista[idx] = animal;
    } else {
      lista.push(animal);
    }
  } else {
    // Novo registro
    animal.id = Date.now().toString(); // id simples
    lista.push(animal);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

export function deleteAnimal(id) {
  const lista = getAllAnimais().filter((a) => a.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

export function getAnimalById(id) {
  return getAllAnimais().find((a) => a.id === id);
}
