
def generate():
    # Training logic here
    progress = 0
    while progress < 100:
        # Training step logic
        progress += 10
        yield progress

# Example usage:
for p in generate():
    print(f"Training progress: {p}%")
