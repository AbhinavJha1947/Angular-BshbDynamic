import { Component, OnInit } from '@angular/core';
import { HomePositivenoteService } from 'src/app/admin-dashboard/Services/home-positivenote.service';

interface PositiveNote {
  id?: number;
  title: string;
  text: string;
}
@Component({
  selector: 'app-home-positive-note',
  templateUrl: './home-positive-note.component.html',
  styleUrls: ['./home-positive-note.component.css']
})
export class HomePositiveNoteComponent  implements OnInit {
  positiveNotes: PositiveNote[] = [];
  newNote: PositiveNote = { title: '', text: '' };

  constructor(private positiveNoteService: HomePositivenoteService) {}

  ngOnInit() {
    this.loadPositiveNotes();
  }

  loadPositiveNotes() {
    this.positiveNoteService.getPositiveNotes().subscribe(notes => this.positiveNotes = notes);
  }

  addNote() {
    if (this.newNote.title && this.newNote.text) {
      this.positiveNoteService.addPositiveNote(this.newNote).subscribe(note => {
        this.positiveNotes.push(note);
        this.newNote = { title: '', text: '' };
      });
    }
  }

  editNote(index: number) {
    const note = this.positiveNotes[index];
    this.newNote = { ...note };
    this.deleteNoteById(note.id!);  // Assuming id is always present
  }

  deleteNoteById(id: number) {
    this.positiveNoteService.deletePositiveNote(id).subscribe(() => {
      this.positiveNotes = this.positiveNotes.filter(note => note.id !== id);
    });
  }

  deleteNote(index: number) {
    const id = this.positiveNotes[index].id;
    if (id != null) {
      this.deleteNoteById(id);
    } else {
      this.positiveNotes.splice(index, 1);
    }
  }
}
