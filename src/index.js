let a = 100;
outer:
for (let b = 2; b <= a; b++){
    for (let c = 2; c < b; c++){
        if (b % c == 0) continue outer;
    }
    console.log(b);
}