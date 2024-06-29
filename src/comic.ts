async function fetchComic(): Promise<undefined> {
    const email = 'a.kabardiyadi@innopolis.university';
    const idUrl = `https://fwd.innopolis.university/api/hw2?${new URLSearchParams({ email })}`;

    const loadingCircle = document.getElementById('loading-circle') as HTMLElement;
    loadingCircle.style.display = 'block'; 

    try {
        const idResponse = await fetch(idUrl);
        if (!idResponse.ok) throw new Error('Failed to fetch comic ID');
        const comicId = await idResponse.text();

        const comicUrl = `https://fwd.innopolis.university/api/comic?id=${comicId}`;
        const comicResponse = await fetch(comicUrl);
        if (!comicResponse.ok) throw new Error('Failed to fetch comic details');
        const comicData = await comicResponse.json();

        document.getElementById('comic-title')!.textContent = comicData.safe_title;
        console.log(comicData.safe_title);
        const comicImg = document.getElementById('comic-img') as HTMLImageElement;
        comicImg.src = comicData.img;
        comicImg.alt = comicData.alt;
        const uploadDate = new Date(comicData.year, comicData.month - 1, comicData.day);
        document.getElementById('comic-date')!.textContent = uploadDate.toLocaleDateString();

        return comicData;
    } catch (error) {
        console.error(error);
    } finally {
        loadingCircle.style.display = 'none';
    }
}

fetchComic();

